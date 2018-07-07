pragma solidity ^0.4.2;
contract Election {
    //model a candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }
    //generates a function to get candidate by id
    mapping(uint => Candidate) public candidates;
    // track # of candidates in storage
    uint public candidatesCount;
    constructor() public {
        addCandidate("jon");
        addCandidate("bobe");
    }
    function addCandidate(string _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

}