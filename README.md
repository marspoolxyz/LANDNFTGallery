# crud

Welcome to your new crud project and to the internet computer development community. By default, creating a new project adds this README and some template files to your project directory. You can edit these template files to customize your project and to include your own code to speed up the development cycle.

To get started, you might want to explore the project directory structure and the default configuration file. Working with this project in your development environment will not affect any production deployment or identity tokens.

To learn more before you start working with crud, see the following documentation available online:

- [Quick Start](https://sdk.dfinity.org/docs/quickstart/quickstart-intro.html)
- [SDK Developer Tools](https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html)
- [Motoko Programming Language Guide](https://sdk.dfinity.org/docs/language-guide/motoko.html)
- [Motoko Language Quick Reference](https://sdk.dfinity.org/docs/language-guide/language-manual.html)

If you want to start working on your project right away, you might want to try the following commands:

```bash
cd crud/
dfx help
dfx config --help
```

dfx canister create --all
dfx build
dfx canister install --all
http://127.0.0.1:8000/?canisterId=ryjl3-tyaaa-aaaaa-aaaba-cai
dfx canister install --all --mode reinstall

How to add data
dfx canister call customer_greeting addMarsLand '( record {tokenid="San Francisco";name="Paris";imageurl="Rome";})'

How to fetch data
dfx canister call customer_greeting findTokenById '(1)'







- [Quick Start](https://sdk.dfinity.org/docs/quickstart/quickstart-intro.html)
- [SDK Developer Tools](https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html)
- [Motoko Programming Language Guide](https://sdk.dfinity.org/docs/language-guide/motoko.html)
- [Motoko Language Quick Reference](https://sdk.dfinity.org/docs/language-guide/language-manual.html)

If you want to start working on your project right away, you might want to try the following commands:

```bash
cd customer_greeting/
dfx help
dfx config --help
```
