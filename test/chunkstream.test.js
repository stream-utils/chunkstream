/**!
 * chunkstream - test/chunkstream.test.js
 *
 * Copyright(c) 2014 fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

"use strict";

/**
 * Module dependencies.
 */

var should = require('should');
var ChunkStream = require('../');

describe('chunkstream.test.js', function () {
  it('should emit data 3 times', function (done) {
    var s = new ChunkStream(['1', '2', '3']);
    var chunks = [];
    s.on('data', function (d) {
      chunks.push(d);
    });
    s.on('end', function () {
      chunks.should.length(3);
      Buffer.concat(chunks).toString().should.equal('123');
      done();
    });
  });

  it('should readable and read()', function (done) {
    var s = new ChunkStream(['1', '2', '3']);
    var chunks = [];
    s.on('readable', function () {
      var chunk;
      while (chunk = s.read()) {
        chunks.push(chunk);
      }
    });
    s.on('end', function () {
      Buffer.concat(chunks).toString().should.equal('123');
      done();
    });
  });
});
