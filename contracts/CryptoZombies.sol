pragma solidity >=0.4.24;

import "./zombieownership.sol";

contract CryptoZombies is ZombieOwnership
    {
        function kill() public onlyOwner {
            selfdestruct(owner());
        }
    }