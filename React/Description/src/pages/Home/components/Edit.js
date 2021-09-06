import { useState } from "react";
import { v4 } from "uuid";
import png from '../components/user.png';

const Edit = ({ add, submittingStatus }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }
  const [descrip, setDescrip] = useState("");
  function DescripChange(e) {
    setDescrip(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [img, setImg] = useState("");
  function imgChange(e) {
    setImg(e.target.value);
  }

  // TODO del
  console.log(note, descrip, date, img);

  function addItem() {
    submittingStatus.current = true
    add(function (prevData) {
      return [       
        {
          id: v4(),
          note,
          descrip,
          date,
          img,
        },
        ...prevData,
      ];
    });
  }

  return (
    <div>
      <h1>PROJECT</h1>
      <p>PROJECT NAME</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>DESCRIPTION</p>
      <input type="text" value={descrip} onChange={DescripChange} />
      <p>DUE DATE</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>ASSIGNED TO</p>
      <div className="ASSIGNED-TO">
      <img src={png} value={img} onChange={imgChange} />
      <img src={png} value={img} onChange={imgChange} />
      <img src={png} value={img} onChange={imgChange} />
      </div>
      <button onClick={addItem} className="Confirm">
        CONFIRM
      </button>
    </div>
  );
};

export default Edit;
