import {takeEvery, all} from 'redux-saga/effects';

import {ERROR_OCCURRED} from '../actions/common';
import handleError from './common';

export default function* root() {
    yield all([
        takeEvery(ERROR_OCCURRED, handleError),
    ]);
}
