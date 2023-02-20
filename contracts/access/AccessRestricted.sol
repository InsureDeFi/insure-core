// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/StorageSlotUpgradeable.sol";

import "./AccessController.sol";
import "./Roles.sol";

abstract contract AccessRestricted is Initializable {
    // keccak256("_access_controller_")
    bytes32 internal constant _ACCESS_CONTROLLER_SLOT = 0x3ff07d6b238084e39fc5d050e304626ccf5b5ccb8f457170664beef2c5e4919a;

    // solhint-disable-next-line func-name-mixedcase
    function __AccessRestricted_init(AccessController accessController_) internal virtual onlyInitializing {
        __AccessRestricted_init_unchained(accessController_);
    }

    // solhint-disable-next-line func-name-mixedcase
    function __AccessRestricted_init_unchained(AccessController accessController_) internal virtual onlyInitializing {
        _setAccessController(address(accessController_));
    }

    modifier onlyRole(bytes32 accountRole) {
        _getAccessController().checkRole(accountRole, msg.sender);
        _;
    }

    function _getAccessController() internal view returns (AccessController) {
        return AccessController(StorageSlotUpgradeable.getAddressSlot(_ACCESS_CONTROLLER_SLOT).value);
    }

    function _setAccessController(address accessController_) internal {
        require(AddressUpgradeable.isContract(accessController_), "AccessRestricted: New access controller is not a contract");
        StorageSlotUpgradeable.getAddressSlot(_ACCESS_CONTROLLER_SLOT).value = accessController_;
    }
}
