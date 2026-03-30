export default function Birthday() {
  return (
    <>
      <label>Birthday:</label>

      <select>
        <option>Day</option>
        {[...Array(31)].map((_, i) => (
          <option key={i}>{i + 1}</option>
        ))}
      </select>

      <select>
        <option>Month</option>
        {[
          "January","February","March","April","May","June",
          "July","August","September","October","November","December"
        ].map((m, i) => (
          <option key={i}>{m}</option>
        ))}
      </select>

      <select>
        <option>Year</option>
        {[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026].map((y,i)=>(
          <option key={i}>{y}</option>
        ))}
      </select>
      <br />
    </>
  );
}