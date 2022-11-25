import React, { useState, useEffect } from 'react';

export default function Promesas() {
  let pagara = new Promise((res, rej) => {
    setTimeout(() => {
      res('pagó los 50');
    }, 10000);
  });

  pagara
    .then(() => {
        console.log(pagara);
    })
    // .catch(() => {})
    // .finally(()=>{})

  console.log(pagara);

  return <div>Promesas</div>;
}
