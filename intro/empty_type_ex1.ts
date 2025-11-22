class Empty {}

function fn(arg: Empty) {
  // do something?
}

// no error, but this isn't an 'Empty' ?
fn({ k: 10 });
