import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={`${layout.sectionImgReverse} rounded-xl`}>
      <img loading="lazy" src={"https://cdn.sanity.io/images/noj3nhym/production/44b4b5635207c86e292cbe41d9024bffad364764-1080x1080.png"} alt="billing" className="w-[100%] h-[100%] relative z-[5] rounded-3xl" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       <span className="text-blk">SAY NO TO </span> <br className="sm:block hidden" /> <span className="text-red-400">DISCRIMINATION</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our Strong private connection with our customers ensures all agents assigned to you are 100% against
        any form of racial or gender discrimination. think of us as your trading Buddies!
        
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        {/* <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /> */}
      </div>
    </div>
  </section>
);

export default Billing;
