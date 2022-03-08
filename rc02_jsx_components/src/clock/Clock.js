import "./Clock.css";

const Clock = () => {
  const date = new Date();
  const dateStr = date.toLocaleDateString();
  const timeStr = date.toLocaleTimeString();

  return (
    <div className="clock-div">
      <h2>DATE:{dateStr}</h2>
      <h3>TIME:{timeStr}</h3>
    </div>
  );
};

export default Clock;
