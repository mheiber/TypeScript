class Parent {
    #x;
    copy(child: Child) {
        this.#x = child.#x; // OK (Sub has Super's #x)
    }
}

class Child extends Parent {
    #x; // OK (Child #x lexically shadows Super's #x)
}

const parent = new Parent();
const child = new Child();
parent.copy(child); // OK


export default 3;
