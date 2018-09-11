class Test {
    #field: number;
    static mutate(getReceiver: () => Test) {
        getReceiver().#field = 100;
        getReceiver().#field += 1;
        getReceiver().#field -= 2;
        getReceiver().#field /= 3;
        getReceiver().#field *= 4;
        getReceiver().#field |= 5;
        getReceiver().#field **= 6;
        getReceiver().#field %= 7;
        getReceiver().#field <<= 8;
        getReceiver().#field >>= 9;
        getReceiver().#field >>>= 10;
        getReceiver().#field &= 11;
        getReceiver().#field ^= 12;
    }
}
