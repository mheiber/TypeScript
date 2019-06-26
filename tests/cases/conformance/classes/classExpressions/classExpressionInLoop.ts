let arr = [];
for (let i = 0; i < 5; ++i) 
    arr.push(class C {
        static hello = () => i;
        [i] = i;
    });
