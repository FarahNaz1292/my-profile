

const Contact = () => {
  return (
    <div
      className="orido_tm_section w-full h-auto clear-both float-left"
      id="contact"
    >
      <div className="orido_tm_contact w-full h-auto clear-both float-left bg-main-color px-0 pt-[135px] pb-[120px] relative">
        <div className="container">
          <div className="infobox w-full float-left flex items-center justify-between mb-[116px]">
            {/* <div className="video_button">
              <a
                className="popup-youtube"
                href="https://www.youtube.com/watch?v=7e90gBu4pas"
              >
                <img
                  className="anim_circle"
                  src="assets/img/contact/video.png"
                  alt
                />
                <img className="svg" src="assets/img/svg/play.svg" alt />
              </a>
            </div> */}

            {/* <div className="flex items-center buttons">
              <div className="orido_tm_boxed_button">
                <a className="anchor" href="#contact">
                  Say Hello{" "}
                  <img className="svg" src="assets/img/svg/send.svg" alt />
                </a>
              </div>
              <div className="orido_tm_simple_button">
                <a className="line_effect anchor" href="#portfolio">
                  My Works{" "}
                  <img className="svg" src="assets/img/svg/top-arrow.svg" alt />
                </a>
              </div>
            </div> */}
          </div>
          <div className="connect w-full flex items-center justify-between">
            <div className="left">
              <div className="hero bgmin-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="text-center lg:text-left">
                    <div className="text py-0 px-[115px]">
                      <h3 className="font-bold text-[56px] tracking-[-2px] text-white mb-[25px]">
                        Let's work together
                      </h3>
                      <p className="font-light leading-[32px] text-[rgba(255,255,255,.7)]">
                        "I’m always excited to collaborate on new ideas and bring projects to life. Let’s build something amazing—get in touch!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
         
        </div>
        <span className="element absolute bottom-[-60px] left-0">
          <img
            className="svg w-full h-full text-transparent"
            src="assets/img/svg/elements.svg"
            alt
          />
        </span>
        <span className="element2 absolute right-[200px] top-[150px]">
          <img
            className="svg w-full h-full text-transparent"
            src="assets/img/svg/element-2.svg"
            alt
          />
        </span>
      </div>
    </div>
  );
};
export default Contact;
