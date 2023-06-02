import React, { useState, useEffect, Fragment } from "react";
import { isEmpty } from "lodash";
import { useDispatch, useSelector } from "react-redux";

import { LoadingIndicator, Message, TitleWithButton } from "../commons";
import { requestAccounts } from "../../actions/accounts";
import AccountTable from "./AccountTable";

const AccountsList = () => {
  const dispatch = useDispatch();
  const { accounts, status, loading } = useSelector((state) => state.accounts);
  const [show, setShow] = useState(true);

  useEffect(() => {
    dispatch(requestAccounts());
    window.setTimeout(() => setShow(false), 2000);
  }, [dispatch]);

  return (
    <Fragment>
      <TitleWithButton label="Cuentas" buttonLabel="Nueva Cuenta" />
      {loading && <LoadingIndicator />}
      {!loading && !isEmpty(accounts) && (
        <div className="mx-2">
          <AccountTable accounts={accounts} />
        </div>
      )}
      {show && status && <Message label={status} />}
    </Fragment>
  );
};

export default AccountsList;
