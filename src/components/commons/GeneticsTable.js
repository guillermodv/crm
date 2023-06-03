import React from "react";
import { Pagination, ShowIcon, Showing } from "../commons";

const GenericsTable = ({
  items = [],
  showDate = false,
  showId = true,
  showPagination = false,
  showTools = true,
}) => (
  <div className="mx-1">
    <table
      className="table table-striped align-content-center border-bottom"
      style={{ "font-size": "12px" }}
    >
      <thead className="text-light bg-primary">
        <tr>
          {showId && <th className="text-left">Id</th>}
          <th className="text-left">Nombre</th>
          <th className="text-left">Descripción</th>
          {showDate && <th className="text-left">Fecha de Creación</th>}
          {showTools && <th className="text-center">Herramientas</th>}
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item._id}>
            {showId && <td className="text-left">{item._id}</td>}
            <td className="text-left">{item.name}</td>
            <td className="text-left">{item.description}</td>
            {showDate && <td className="text-left">{item.date}</td>}
            {showTools && (
              <td className="text-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => alert("¿desear modificar?")}
                >
                  <ShowIcon type={"fas fa-pen"} />
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
    {showPagination && <Pagination />}
    {showPagination && <Showing items={items} />}
  </div>
);

export default GenericsTable;
