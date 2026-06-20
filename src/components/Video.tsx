'use client';

import { useEffect, useState } from "react";

type VideoProps = {
  thumbnail: string;
  id: string;
};

export default function Video({ thumbnail, id }: VideoProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <section className="video-one" id="video">
      <img
        src="/assets/images/background/video-one-bg.png"
        alt="Awesome Image"
        className="video-one__bg"
      />
      <div className="container wow fadeInUp" data-wow-duration="1500ms">
        <div className="video-one__box ">
          <img src={thumbnail} alt="" />
          <div className="video-one__content">
            {isOpen ? (
              <div
                className="modal-video"
                role="dialog"
                aria-modal="true"
                onClick={() => setIsOpen(false)}
              >
                <div className="modal-video-body">
                  <div className="modal-video-inner">
                    <div className="modal-video-movie-wrap" onClick={(event) => event.stopPropagation()}>
                      <button
                        className="modal-video-close-btn"
                        type="button"
                        aria-label="Close video"
                        onClick={() => setIsOpen(false)}
                      />
                      <iframe
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
                        title="Development video"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            <div
              onClick={() => setIsOpen(true)}
              className="video-popup video-one__btn"
            >
              <i className="fa fa-play"></i>
            </div>

            <h2 className="video-one__title">
              Watch <span>Development</span> <br /> In Action!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
