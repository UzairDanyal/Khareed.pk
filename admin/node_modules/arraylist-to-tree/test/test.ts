'use strict';

const expect = require('chai').expect;
const arrayList = require('../index');

const categoryList = (array: any) => {
const main: any = [];
const children = {};
let i = 0;
for (i; i < array.length; ++i) {
const item = array[i];
const p = item.parentInt;
const target: any = p === 0 ? main : (children[p] || (children[p] = []));
target.push(item);
}

const childData = (parent: any ) => {
if (children [parent.categoryId]) {
parent.children = children [parent.categoryId];
let k = 0;
for ( k; k < parent.children.length; ++k) {
childData(parent.children [k]);
}
}
};
let j = 0;
for ( j; j < main.length; ++j) {
childData(main [j]);
}
return main;
}
categoryList(arrayList);