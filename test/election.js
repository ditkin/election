const Election = artifacts.require('./Election.sol');
contract('Election', accounts => {
  it('inits with 2 candidates', async () => {
    const instance = await Election.deployed();
    const count = await instance.candidatesCount();
    assert.equal(count, 2);
  });
  it('inits candidates w/ rite values', async () => {
    const instance = await Election.deployed();
    const candidateOne = await instance.candidates(1);
    assert.equal(candidateOne[0], 1, 'contains right id');
    assert.equal(candidateOne[1], 'jon', 'contains right name');
    assert.equal(candidateOne[2], 0, 'contains right votecount');
    const candidateTwo = await instance.candidates(2);
    assert.equal(candidateTwo[0], 2, 'contains right id');
    assert.equal(candidateTwo[1], 'bobe', 'contains right name');
    assert.equal(candidateTwo[2], 0, 'contains right votecount');
  });
});
