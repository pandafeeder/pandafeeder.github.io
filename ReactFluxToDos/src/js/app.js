'use strict'
require('../css/app.css')

import React from 'react'
import ReactDOM from 'react-dom'
import Todo from './page/Todo'

const app = document.getElementById("container")

ReactDOM.render(<Todo/>, app);
