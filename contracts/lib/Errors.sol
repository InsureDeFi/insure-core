// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.17;

library Errors {
  error ZeroAddress();
  error UnsupportedAsset();
  error CoverTooSmall();
  error InvalidDuration();
  error Freezed();
  error InvalidRate();
  error IneligiblePolicy();
  error PolicyUtilized();
  error PolicyDoesNotExists();
  error PolicyExpired();
  error NotOwner();
  error NotOwnerOrPoolManager();
  error CallerNotPool();
  error AssetAlreadyInitialized();
  error UnlockBeforeExpiry();
}
