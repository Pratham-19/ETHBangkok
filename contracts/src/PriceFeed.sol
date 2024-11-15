// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract PriceFeed {
    ///  @notice The Chronicle ETH/USD oracle.
    IChronicle public immutable i_chronicle;

    /// @notice The SelfKisser granting access to Chronicle oracles.
    ISelfKisser public immutable i_selfKisser;

    constructor(address chronicle_, address selfKisser_) {
        i_chronicle = IChronicle(chronicle_);
        i_selfKisser = ISelfKisser(selfKisser_);

        // Note to add address(this) to chronicle oracle's whitelist.
        // This allows the contract to read from the chronicle oracle.
        i_selfKisser.selfKiss(address(i_chronicle));
    }

    /// @notice Function to read the latest data from the Chronicle oracle.
    /// @return val The current value returned by the oracle.
    function read() external view returns (uint256 val) {
        return i_chronicle.read();
    }
}

interface IChronicle {
    /**
     * @notice Returns the oracle's current value.
     * @dev Reverts if no value set.
     * @return value The oracle's current value.
     *
     */
    function read() external view returns (uint256 value);
}

interface ISelfKisser {
    /// @notice Kisses caller on oracle `oracle`.
    function selfKiss(address oracle) external;
}
