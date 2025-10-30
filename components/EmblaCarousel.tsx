"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import JobCard from '@/components/JobCard';

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  slides: Array<{
    id: string;
    title: string;
    company: string;
    url: string;
    domain: string | null;
    tags?: string[];
    why_this_job?: string;
  }>;
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: true }); // Keep loop enabled
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const tweenFactor = useRef(0);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled: prevBtnDisabledProps,
    nextBtnDisabled: nextBtnDisabledProps,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const opacity = numberWithinRange(tweenValue, 0, 1).toString();
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
        });
      });
    },
    []
  );

  const updateButtonStates = useCallback(() => {
    if (!emblaApi) return;
    const selectedIndex = emblaApi.selectedScrollSnap();
    setPrevBtnDisabled(selectedIndex === 0); // Disable prev button if on the first slide
    setNextBtnDisabled(selectedIndex === slides.length - 1); // Disable next button if on the last slide
  }, [emblaApi, slides.length]);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    updateButtonStates();
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity)
      .on('select', updateButtonStates); // Update button states on slide change
  }, [emblaApi, tweenOpacity, updateButtonStates]);

  return (
    <div className="embla">
      <div ref={emblaRef}>
        <div className="embla__container">
          {slides.map((job) => (
            <div key={job.id} className="embla__slide">
              <JobCard job={job} />
            </div>
          ))}
        </div>
      </div>
      <div className="embla__buttons">
        <button
          className="embla__button embla__button--prev"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={prevBtnDisabled}
        >
          &#8249;
        </button>
        <button
          className="embla__button embla__button--next"
          onClick={() => emblaApi?.scrollNext()}
          disabled={nextBtnDisabled}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default EmblaCarousel;
