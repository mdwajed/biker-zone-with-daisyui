const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.wajed.value);
    console.log(e.target.nafi.value);
    console.log(e.target.nehan.value);
    console.log("form submit");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5 ">
        <input type="text" name="wajed"className="bg-green-600 text-black" />
        <br />
        <input type="text" name="nafi" id="" className="bg-green-600 text-black"/>
        <br />
        <input type="text" name="nehan" id="" className="bg-green-600 text-black" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
