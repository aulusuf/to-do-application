import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/output.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [id, setId] = useState();
  const [tittle, setTittle] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    axios
      .get("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list?q={"status": "0"}", {
        mode: "cors",
      })
      .then((res) => {
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="bg-slate-50 pb-10">
      <h1 className="text-5xl font-bold text-slate-700 text-center pt-20">
        To Do Application
      </h1>
      <div className="text-center mt-10">
        <button className="bg-slate-500 hover:bg-slate-700 text-slate-50 px-5 py-2 font-semibold tracking-wider text-lg rounded-lg">
          Add
        </button>
      </div>

      <div className="flex justify-center mt-10">
        <div className="px-4">
          <table className="table-fixed">
            <thead className="bg-slate-200 h-16 text-slate-800">
              <tr className="rounded-lg">
                <th className="w-12 rounded-l-lg">ID</th>
                <th className="w-72 ">Tittle</th>
                <th className="w-12 rounded-r-lg">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {todo.map((list) => {
                return (
                  <tr
                    className="h-20 border-separate border-y-8 border-slate-50"
                    key={list.id}
                  >
                    <td className="text-center">{list.id}</td>
                    <td>{list.title}</td>
                    <td className="text-center">{list.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="px-4">
          <table className="table-fixed">
            <thead className="bg-slate-200 h-16 text-slate-800">
              <tr className="rounded-lg">
                <th className="w-12 rounded-l-lg">ID</th>
                <th className="w-72 ">Tittle</th>
                <th className="w-12 rounded-r-lg">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {todo.map((list) => {
                return (
                  <tr
                    className="h-20 border-separate border-y-8 border-slate-50"
                    key={list.id}
                  >
                    <td className="text-center">{list.id}</td>
                    <td>{list.title}</td>
                    <td className="text-center">{list.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
