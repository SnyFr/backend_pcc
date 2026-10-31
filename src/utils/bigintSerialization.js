const setupBigIntegerSerialization = () => {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  }
}

export default setupBigIntegerSerialization;