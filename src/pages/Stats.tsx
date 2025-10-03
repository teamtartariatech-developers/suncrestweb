
import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-700">
      <div className="text-center">
        <div className="text-3xl font-bold text-secondary-300 mb-2">
          <CountUp start={0} end={450} duration={3.5} suffix="+" />
        </div>
        <div className="text-primary-200">Happy Clients</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-secondary-300 mb-2">
          <CountUp start={0} end={100} duration={2} prefix="₹" suffix="Cr+" />
        </div>
        <div className="text-primary-200">Assets Managed</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-secondary-300 mb-2">
          <CountUp start={0} end={8} duration={1} suffix="+" />
        </div>
        <div className="text-primary-200">Years Experience</div>
      </div>
    </div>
  );
};

export default Stats;
