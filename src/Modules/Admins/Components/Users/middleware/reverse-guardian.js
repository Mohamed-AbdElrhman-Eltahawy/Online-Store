import React from 'react';
import user from "reactor/user";
import { Redirect } from "react-router";

export default function alreadyLoggedIn(route, history) {
    if (user.isLoggedIn()) {
      return <Redirect to="/users" />;
    }
  }