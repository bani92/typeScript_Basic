let user: {
    id? : number;
    name: string;
} = {
    id: 1,
    name: "bani",
}
// 객체 리터럴타입

let config: {
    readonly apiKey: string;
} = {
    apiKey: "MY API KEY"
};

config.apiKey = "hacked";
