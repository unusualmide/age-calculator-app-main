import { useState } from "react";

export default function App() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [newYear, setNewYear] = useState("--");
  const [newMonth, setNewMonth] = useState("--");
  const [newDay, setNewDay] = useState("--");

  //const today = new Date()
  const handleGetAge = () => {
    if(year > 0 && month > 0 && day > 0){
    const getNewDay = new Date().getDate() - day;
    setNewDay(getNewDay);

    const getNewMonth = new Date().getMonth() + 1 - month;
    setNewMonth(getNewMonth);

    const getNewYear = new Date().getFullYear() - year;
    setNewYear(getNewYear);

    }
  };

  const days = new Date().getDate();

  console.log(days.length);

  //let newYear;
  //const valid  = ()  => {
  //  newYear = today.getFullYear() - year
  // return newYear
  // }

  //function handleGetAge() {

  //console.log( valid())

  // }

  return (
    <div className="flex flex-col w-[400px] sm:w-[725px] h-[530px] sm:h-[570px] rounded-br-[150px] rounded-bl-3xl rounded-t-2xl bg-white p-8 sm:p-11">
      <Input
        year={year}
        setYear={setYear}
        month={month}
        setMonth={setMonth}
        day={day}
        setDay={setDay}
        onGetAge={handleGetAge}
      />
      <OutputAge
        newYear={newYear}
        newMonth={newMonth}
        newDay={newDay}
        year={year}
      />
    </div>
  );
}

function Input({ year, setYear, month, setMonth, day, setDay, onGetAge }) {
  const today = new Date().getFullYear();


  return (
    <div className="flex flex-col gap-12 sm:gap-1 pb-10 sm:pb-0">
      <div className="flex gap-5">
        <div className="inline-flex flex-col space-y-2">
          <label
            className={`text-xs sm:text-sm tracking-[0.2em]  ${
              day > 31 || day === 0 ? "text-lightred" : "text-smokeygrey"
            }`}
            htmlFor="day"
          >
            DAY
          </label>
          <input
            value={day}
            onChange={(e) => setDay(Number(e.target.value))}
            maxLength={2}
            className={`border sm:border-2 focus:outline-none focus:ring-2 focus:border-purple focus:border-none ${ day > 31 || day === 0 ? 'border-lightred' : 'border-offwhite'} w-24 sm:w-[135px] py-2.5 pl-3 sm:pl-5 rounded-md text-2xl sm:text-3xl placeholder:text-smokeygrey`}
            type="text"
            name="day"
            placeholder="DD"
          />
          <p className={`text-xs font-light italic text-lightred ${day > 31 ? 'block' : 'hidden'}`}>Must be a valid day</p>
          <p className={`text-xs font-light italic text-lightred ${day === 0 ? 'block' : 'hidden'}`}>This field is required</p>
        </div>
        <div className="inline-flex flex-col space-y-2">
          <label
            className={`text-xs sm:text-sm tracking-[0.2em] ${
              month > 12 || month === 0 ? "text-lightred" : "text-smokeygrey"
            }`}
            htmlFor="month"
          >
            MONTH
          </label>
          <input
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            maxLength={2}
            className={`border sm:border-2 focus:outline-none focus:ring-2 focus:border-purple focus:border-none ${month > 12 || month === 0 ? 'border-lightred' : 'border-offwhite'} w-24 sm:w-[135px] py-2.5 pl-3 sm:pl-5 rounded-md text-2xl sm:text-3xl placeholder:text-smokeygrey`}
            type="text"
            name="day"
            placeholder="MM"
          />
           {month > 12  && <p className="text-xs font-light italic text-lightred">Must be a valid month</p>}
           {month === 0 && <p className="text-xs font-light italic text-lightred">This field is required</p>}
        </div>
        <div className="inline-flex flex-col space-y-2"> 
          <label
            className={`text-xs sm:text-sm tracking-[0.2em] ${
              year > today || year === 0 ? "text-lightred" : "text-smokeygrey"
            }`}
            htmlFor="day"
          >
            YEAR
          </label>
          <input
            className={`focus:outline-none focus:ring-2 focus:border-purple focus:border-none border sm:border-2 ${year > today || year === 0 ? 'border-lightred': 'border-offwhite'} w-24 sm:w-[135px] py-2.5 pl-3 sm:pl-5 rounded-md text-2xl sm:text-3xl placeholder:text-smokeygrey`}
            value={year}
            type="text"
            name="day"
            placeholder="YYYY"
            maxLength={4}
            onChange={(e) => setYear(Number(e.target.value))}
          />
          {year > today && <p className="text-xs font-light italic text-lightred">Must be in the past</p>}
          {year === 0 && <p className="text-xs font-light italic text-lightred">This field is required</p>}
        </div>
      </div>

      <div className="inline-flex justify-center items-center">
        <hr className="border w-full border-offwhite" />
        <button
          onClick={onGetAge}
          className="bg-purple rounded-full w-20 sm:w-[92px] h-16 sm:h-[80px] flex justify-center items-center text-center focus:bg-black focus:outline-none focus:ring-2 focus:ring-purple -order-3 sm:order-none"
        >
          <img src="img/icon-arrow.svg" alt="icon-arrow" />
        </button>
      </div>
    </div>
  );
}

function OutputAge({ newYear, newMonth, newDay }) {
  return (
    <div>
      <h2 className="text-6xl sm:text-8xl  font-[900] italic">
        <span className="text-purple">{newYear > 0 ? newYear : "--"}</span>years
      </h2>
      <h2 className="text-6xl sm:text-8xl  font-[900] italic">
        <span className="text-purple">
          {Math.abs(newMonth) > 0 ? Math.abs(newMonth) : "--"}
        </span>
        months
      </h2>
      <h2 className="text-6xl sm:text-8xl  font-[900] italic">
        <span className="text-purple">
          {Math.abs(newDay) > 0 ? Math.abs(newDay) : "--"}
        </span>
        days
      </h2>
    </div>
  );
}
