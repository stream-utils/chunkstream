/**!
 * chunkstream - index.js
 *
 * Copyright(c) fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var Readable = require('stream').Readable;
var util = require('util');
util.inherits(ChunkStream, Readable);

function ChunkStream(chunks, options) {
  Readable.call(this, options);
  this._chunks = chunks;
}

ChunkStream.prototype._read = function() {
  this.push(this._chunks.shift());
};

module.exports = ChunkStream;
