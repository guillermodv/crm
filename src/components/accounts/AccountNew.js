import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { capitalize, find } from "lodash";
import { cuit } from "arg.js";

import {
  LoadingIndicator,
  Error,
  ShowIcon,
  ShowIconWithLabel,
} from "../commons";
import { requestSaveAccount } from "../../actions/accounts";
import { accountSchema, friendlyMessage } from "../../schema/account";
import AccountForm from "./AccountForm";

const AccountNew = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.accounts.loading);
  const [account, setAccount] = useState({
    potential: "1",
    ranking: "1",
    state: "1",
    type: "1",
  });
  const [error, setError] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    if (name === "cuit") {
      !cuit.isValid(value) ? setError("Cuit inválido") : setError("");
    }
    setAccount({ ...account, [name]: value });
  };

  async function handleSubmit() {
    const valid = await accountSchema.isValid({
      name: account.name,
      socialName: account.socialName,
      industry: account.industry,
      service: account.service,
      cuit: account.cuit,
    });
    if (!valid) {
      accountSchema
        .validate({
          name: account.name,
          socialName: account.socialName,
          industry: account.industry,
          service: account.service,
          cuit: account.cuit,
        })
        .catch(function ({ errors, path }) {
          setError(
            `${capitalize(
              find(friendlyMessage, (f) => f.id === path).description
            )}: ${errors}`
          );
        });
    } else {
      setError("");
      dispatch(requestSaveAccount(account));
      return props.history.push("/accounts");
    }
  }

  function handleCancel() {
    setError("");
    return props.history.push("/accounts");
  }

  return (
    <Fragment>
      <div className="row col-12 mt-2 style={{'font-size': '14px'}}">
        <div className={"col-sm-6 text-left"}>
          <h4>
            <ShowIcon type="fas fa-pen" />
            &nbsp; Nueva Cuenta.
          </h4>
        </div>
        <div className={"col-6 text-right"}>
          <Link to="/accounts" className="btn btn-secondary">
            <ShowIconWithLabel
              label="Volver a Cuentas"
              type="fas fa-arrow-circle-left2"
            />
          </Link>
        </div>
      </div>
      {loading && <LoadingIndicator />}
      {error !== "" && <Error label={error} />}
      {!loading && account && (
        <AccountForm account={account} handleChange={handleChange} />
      )}
      <div className="text-right mx-4">
        <button
          disabled={error !== ""}
          type="button"
          className="btn btn-success"
          onClick={() => handleSubmit()}
        >
          <ShowIcon type="fas fa-check" />
        </button>
        &nbsp;&nbsp;
        <button
          disabled={error !== ""}
          type="button"
          className="btn btn-warning"
          onClick={() => handleCancel()}
        >
          <ShowIcon type="fas fa-trash" />
        </button>
      </div>
    </Fragment>
  );
};

export default AccountNew;
