import Item from "./Item";

const List = ({ listData, deleteData, submittingStatus }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, descrip, date, img, id } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            descrip={descrip}
            date={date}
            img={img}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;
