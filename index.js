
module.exports = function isFrontend() {
  return (typeof window !== 'undefined');
};