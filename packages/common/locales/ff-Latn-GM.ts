/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js

const u = undefined;

function plural(n: number): number {
  let i = Math.floor(Math.abs(n));
  if (i === 0 || i === 1) return 1;
  return 5;
}

export default [
  'ff-Latn-GM',
  [['subaka', 'kikiiɗe'], u, u],
  u,
  [
    ['d', 'a', 'm', 'n', 'n', 'm', 'h'], ['dew', 'aaɓ', 'maw', 'nje', 'naa', 'mwd', 'hbi'],
    ['dewo', 'aaɓnde', 'mawbaare', 'njeslaare', 'naasaande', 'mawnde', 'hoore-biir'],
    ['dew', 'aaɓ', 'maw', 'nje', 'naa', 'mwd', 'hbi']
  ],
  u,
  [
    ['s', 'c', 'm', 's', 'd', 'k', 'm', 'j', 's', 'y', 'j', 'b'],
    ['sii', 'col', 'mbo', 'see', 'duu', 'kor', 'mor', 'juk', 'slt', 'yar', 'jol', 'bow'],
    [
      'siilo', 'colte', 'mbooy', 'seeɗto', 'duujal', 'korse', 'morso', 'juko', 'siilto',
      'yarkomaa', 'jolal', 'bowte'
    ]
  ],
  u,
  [['H-I', 'C-I'], u, ['Hade Iisa', 'Caggal Iisa']],
  1,
  [6, 0],
  ['d/M/y', 'd MMM, y', 'd MMMM y', 'EEEE d MMMM y'],
  ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
  ['{1} {0}', u, u, u],
  [',', ' ', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
  ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'],
  'GMD',
  'D',
  'Dalasi Gammbi',
  {'GMD': ['D'], 'JPY': ['JP¥', '¥'], 'USD': ['US$', '$']},
  plural
];