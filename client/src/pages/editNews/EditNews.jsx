import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const EditNews = () => {
  const [activeEditorTitle, setActiveEditorTitle] = useState(false);
  const [activeEditoBody, setActiveEditorBody] = useState(false);
  // const [activeEditorPic, setActiveEditorPic] = useState(false);

  const [editorTitleValue, setEditorTitleValue] = useState("");

  const [gotNews, setGotNews] = useState({});

  let { id } = useParams();
  const news = useSelector((store) => store.news.news);
  const filtered = news.filter((news) => news.id === Number(id));
  const card = filtered[0];
  // console.log('card', card);
  const newsHandler1 = async () => {
    try {
      const response = await fetch("http://localhost:3010/admin/editnewspage", {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) throw new Error(`Ошибка`);
      const data = await response.json();
      // console.log(data);
      setGotNews(data)

      if (data.err) throw new Error(data.err);
    } catch (err) {
      console.log(err);

    }
  };

  React.useEffect(() => {
    newsHandler1()
  }, []);

  // const titleNews = gotNews.getNewsList[0].title
  // console.log(titleNews)

  const handleSaveTitle = async (e) => {
    e.preventDefault();
    setActiveEditorTitle(false);
    // try {
    //   const res = await fetch('http://localhost:3010/admin/editnewspage', {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       nameField: 'topText', editorTitleValue
    //     }),
    //   });
    //   if (!res.ok)
    //     throw new Error('Данные не удалось изменить');
    //   const data = await res.json();
    //   setActiveEditorTitle(false);
    //   setGotNews(data)
    // } catch (err) {
    //   console.log(err);
    //   alert(err.message);
    // }
  };



  const handleOpenEditTitle = () => {
    setActiveEditorTitle(true);
  };
  const handleOpenEditBody = () => {
    setActiveEditorBody(true);
  };
  // const handleOpenEditPic = () => {
  //   setActiveEditorPic(true);
  // };

  // const handleCloseEditTitle = () => {
  //   setActiveEditorTitle(false);
  // };
  const handleCloseEditBody = () => {
    setActiveEditorBody(false);
  };
  // const handleCloseEditPic = () => {
  //   setActiveEditorPic(false);
  // };


  
  return (
    <>
      {!activeEditorTitle ? (
        <>
          <div>{gotNews ? gotNews.title : "идет загрузка"}</div>
          <button onClick={handleOpenEditTitle}>Edit</button>
        </>
      ) : (
        <>
          <input
            placeholder="Your Text here..."
            defaultValue={gotNews.title}
          ></input>
          <button onClick={handleSaveTitle}>Save</button>
        </>
      )}

      {!activeEditoBody ? (
        <>
          <div>{gotNews ? gotNews.body : "идет загрузка"}</div>
          <button onClick={handleOpenEditBody}>Edit</button>
        </>
      ) : (
        <>
          <input
            placeholder="Your Text here..."
            defaultValue={gotNews.body}
          ></input>
          <button onClick={handleCloseEditBody}>Save</button>
        </>
      )}
    </>
  );
};

export default EditNews;
