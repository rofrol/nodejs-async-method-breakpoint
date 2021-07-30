class Test {
  async foo() {
    await this.bar();
    debugger;
    await baz();
    console.log("foo");
  }

  async bar() {
    console.log("bar");
  }
}

async function baz() {
  console.log("baz");
}

const test = new Test();
setTimeout(async function () {
  await test.foo();
}, 300);
