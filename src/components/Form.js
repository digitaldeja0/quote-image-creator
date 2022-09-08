export default function Form() {
  return (
    <div>
      <main className="main">
        <form className="form">
          <div className="formInputDiv">
            <input type="text" name="" id="" placeholder="Top Quote" />
            <input type="text" name="" id="" placeholder="Bottom Quote" />
          </div>
          <div className="formSubmitDiv">
            <button type="submit">Generate New Quote Image</button>
          </div>
        </form>
      </main>
    </div>
  );
}
