!!! ALPHA SPEC MODE !!!

# Ripple Offline

This library is designed to enable the generation of hex signed transactions
for future submission to the Ripple network for validation and inclusion in
a ledger.

## Installation

````
npm install --save ripple-offline
````

## Usage

````
var hex = SignedTransaction.create(options)

new Submitter().submit(hex)
  .then(response => {
    // transaction submitted successfully!
  })
  .error(error => {
    // error submitting transaction
  })
````
