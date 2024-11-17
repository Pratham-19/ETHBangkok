// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {TokenA} from "./TokenA.sol";
import {TokenB} from "./TokenB.sol";
import {TokenC} from "./TokenC.sol";
import {TokenD} from "./TokenD.sol";
import {DataAttester} from "./attestation/DataAttester.sol";

contract Claim {
    TokenA tokenA;
    TokenB tokenB;
    TokenC tokenC;
    TokenD tokenD;
    DataAttester dataAttester;

    constructor(address _dataAttester, address _tokenA, address _tokenB, address _tokenC, address _tokenD) {
        dataAttester = DataAttester(_dataAttester);
        tokenA = TokenA(_tokenA);
        tokenB = TokenB(_tokenB);
        tokenC = TokenC(_tokenC);
        tokenD = TokenD(_tokenD);
    }

    function setTokenA(address _tokenA) public {
        tokenA = TokenA(_tokenA);
    }

    function setTokenB(address _tokenB) public {
        tokenB = TokenB(_tokenB);
    }

    function setTokenC(address _tokenC) public {
        tokenC = TokenC(_tokenC);
    }

    function setTokenD(address _tokenD) public {
        tokenD = TokenD(_tokenD);
    }

    function setDataAttester(address _dataAttester) public {
        dataAttester = DataAttester(_dataAttester);
    }

    function claim(address token, address user, uint256 questId, string memory location) public {
        tokenA = TokenA(token);
        tokenA.mint(user, 1e18);

        dataAttester.attest(user, user, questId, location);
    }
}
