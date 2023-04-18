// Automatically generated with Reach 0.1.13 (88e48902)
pragma abicoder v2;
pragma solidity ^0.8.17;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 *
 * _Available since v4.1._
 */
interface IERC20Metadata is IERC20 {
    /**
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() external view returns (uint8);
}

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

/**
 * @dev Implementation of the {IERC20} interface.
 *
 * This implementation is agnostic to the way tokens are created. This means
 * that a supply mechanism has to be added in a derived contract using {_mint}.
 * For a generic mechanism see {ERC20PresetMinterPauser}.
 *
 * TIP: For a detailed writeup see our guide
 * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How
 * to implement supply mechanisms].
 *
 * We have followed general OpenZeppelin Contracts guidelines: functions revert
 * instead returning `false` on failure. This behavior is nonetheless
 * conventional and does not conflict with the expectations of ERC20
 * applications.
 *
 * Additionally, an {Approval} event is emitted on calls to {transferFrom}.
 * This allows applications to reconstruct the allowance for all accounts just
 * by listening to said events. Other implementations of the EIP may not emit
 * these events, as it isn't required by the specification.
 *
 * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}
 * functions have been added to mitigate the well-known issues around setting
 * allowances. See {IERC20-approve}.
 */
contract ERC20 is Context, IERC20, IERC20Metadata {
    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    /**
     * @dev Sets the values for {name} and {symbol}.
     *
     * The default value of {decimals} is 18. To select a different value for
     * {decimals} you should overload it.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     */
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev Returns the name of the token.
     */
    function name() public view virtual override returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5.05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless this function is
     * overridden;
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    /**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - the caller must have a balance of at least `amount`.
     */
    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }

    /**
     * @dev See {IERC20-allowance}.
     */
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on
     * `transferFrom`. This is semantically equivalent to an infinite approval.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }

    /**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * NOTE: Does not update the allowance if the current allowance
     * is the maximum `uint256`.
     *
     * Requirements:
     *
     * - `from` and `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     * - the caller must have allowance for ``from``'s tokens of at least
     * `amount`.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    /**
     * @dev Atomically increases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, _allowances[owner][spender] + addedValue);
        return true;
    }

    /**
     * @dev Atomically decreases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        address owner = _msgSender();
        uint256 currentAllowance = _allowances[owner][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approve(owner, spender, currentAllowance - subtractedValue);
        }

        return true;
    }

    /**
     * @dev Moves `amount` of tokens from `sender` to `recipient`.
     *
     * This internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     */
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(from, to, amount);

        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        unchecked {
            _balances[from] = fromBalance - amount;
        }
        _balances[to] += amount;

        emit Transfer(from, to, amount);

        _afterTokenTransfer(from, to, amount);
    }

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Transfer} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, reducing the
     * total supply.
     *
     * Emits a {Transfer} event with `to` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least `amount` tokens.
     */
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    /**
     * @dev Spend `amount` form the allowance of `owner` toward `spender`.
     *
     * Does not update the allowance amount in case of infinite allowance.
     * Revert if not enough allowance is available.
     *
     * Might emit an {Approval} event.
     */
    function _spendAllowance(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }

    /**
     * @dev Hook that is called before any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * will be transferred to `to`.
     * - when `from` is zero, `amount` tokens will be minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}

    /**
     * @dev Hook that is called after any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * has been transferred to `to`.
     * - when `from` is zero, `amount` tokens have been minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}
}
/*
  ReachToken essentially emulates Algorand Standard Assets on Ethereum, but doesn't include things like clawback or a separation of management and creator.
 */
contract ReachToken is ERC20 {
  address private _creator;
  string private _url;
  string private _metadata;
  uint8 private _decimals;

  constructor (
    string memory name_,
    string memory symbol_,
    string memory url_,
    string memory metadata_,
    uint256 supply_,
    uint256 decimals_
  ) ERC20(name_, symbol_) {
    _creator = _msgSender();
    _mint(_creator, supply_);
    _url = url_;
    _metadata = metadata_;
    _decimals = uint8(decimals_);
  }

  function url() public view returns (string memory) { return _url; }

  function metadata() public view returns (string memory) { return _metadata; }

  function decimals() public view override returns (uint8) { return _decimals; }

  function burn(uint256 amount) public virtual returns (bool) {
    require(_msgSender() == _creator, "must be creator");
    _burn(_creator, amount);
    return true;
  }

  function destroy() public virtual {
    require(_msgSender() == _creator, "must be creator");
    require(totalSupply() == 0, "must be no supply");
    selfdestruct(payable(_creator));
  }
}

// Generated code includes meaning of numbers
error ReachError(uint256 msg);

contract Stdlib {
  function safeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x + y) >= x, "add overflow"); }
  function safeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x - y) <= x, "sub wraparound"); }
  function safeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y == 0 || (z = x * y) / y == x, "mul overflow"); }
  function safeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x / y; }
  function safeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x % y; }

  function unsafeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x + y; } }
  function unsafeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x - y; } }
  function unsafeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x * y; } }
  function unsafeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x / y; } }
  function unsafeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x % y; } }

  function safeSqrt(uint256 y) internal pure returns (uint256 z) {
    if (y > 3) {
      z = y;
      uint256 x = y / 2 + 1;
      while (x < z) {
        z = x;
        x = (y / x + x) / 2;
      }
    } else if (y != 0) {
      z = 1;
    }
  }

  // From OpenZeppelin --- MIT license
  function uintToStringDyn(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

  function reachRequire(bool succ, uint256 errMsg) internal pure {
    if ( ! succ ) {
      revert ReachError(errMsg);
    }
  }

  function checkFunReturn(bool succ, bytes memory returnData, uint256 errMsg) internal pure returns (bytes memory) {
    if (succ) {
      return returnData;
    } else {
      if (returnData.length > 0) {
        assembly {
          let returnData_size := mload(returnData)
          revert(add(32, returnData), returnData_size)
        }
      } else {
        revert ReachError(errMsg);
      }
    }
  }

  function tokenAllowance(address payable token, address owner, address spender) internal returns (uint256 amt) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.allowance.selector, owner, spender));
    checkFunReturn(ok, ret, 0 /*'token.allowance'*/);
    amt = abi.decode(ret, (uint256));
  }

  function tokenTransferFrom(address payable token, address sender, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transferFrom.selector, sender, recipient, amt));
    checkFunReturn(ok, ret, 1 /*'token.transferFrom'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenTransfer(address payable token, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transfer.selector, recipient, amt));
    checkFunReturn(ok, ret, 2 /*'token.transfer'*/);
    res = abi.decode(ret, (bool));
  }
  function safeTokenTransfer(address payable token, address recipient, uint256 amt) internal {
    require(tokenTransfer(token, recipient, amt));
  }

  function reachTokenBurn(address payable token, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.burn.selector, amt));
    checkFunReturn(ok, ret, 3 /*'token.burn'*/);
    res = abi.decode(ret, (bool));
  }
  function safeReachTokenBurn(address payable token, uint256 amt) internal {
    require(reachTokenBurn(token, amt));
  }

  function reachTokenDestroy(address payable token) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.destroy.selector));
    checkFunReturn(ok, ret, 4 /*'token.destroy'*/);
    res = true;
  }
  function safeReachTokenDestroy(address payable token) internal {
    require(reachTokenDestroy(token));
  }

  function readPayAmt(address sender, address payable token) internal returns (uint256 amt) {
    amt = tokenAllowance(token, sender, address(this));
    require(checkPayAmt(sender, token, amt));
  }

  function checkPayAmt(address sender, address payable token, uint256 amt) internal returns (bool) {
    return tokenTransferFrom(token, sender, address(this), amt);
  }

  function tokenApprove(address payable token, address spender, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.approve.selector, spender, amt));
    checkFunReturn(ok, ret, 5 /*'token.approve'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenBalanceOf(address payable token, address owner) internal returns (uint256 res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0) }(abi.encodeWithSelector(IERC20.balanceOf.selector, owner));
    checkFunReturn(ok, ret, 6 /*'token.balanceOf'*/);
    res = abi.decode(ret, (uint256));
  }
}

struct T0 {
  uint256 elem0;
  uint256 elem1;
  }
struct T1 {
  address payable v541;
  uint256 v542;
  uint256 v553;
  }
struct T2 {
  uint256 elem0;
  }
struct T3 {
  address payable elem0;
  uint256 elem1;
  address payable elem2;
  uint256 elem3;
  uint256 elem4;
  uint256 elem5;
  uint256 elem6;
  }
struct T4 {
  address payable v541;
  uint256 v542;
  address payable v558;
  uint256 v564;
  uint256 v565;
  bool v651;
  uint256 v660;
  uint256 v662;
  uint256 v663;
  uint256 v664;
  uint256 v666;
  uint256 v675;
  uint256 v705;
  }
struct T5 {
  address payable elem0;
  uint256 elem1;
  address payable elem2;
  uint256 elem3;
  uint256 elem4;
  bool elem5;
  uint256 elem6;
  uint256 elem7;
  uint256 elem8;
  uint256 elem9;
  uint256 elem10;
  uint256 elem11;
  uint256 elem12;
  uint256 elem13;
  uint256 elem14;
  uint256 elem15;
  }
struct T6 {
  address payable v541;
  uint256 v542;
  address payable v558;
  uint256 v564;
  uint256 v565;
  bool v651;
  uint256 v661;
  uint256 v662;
  uint256 v664;
  uint256 v665;
  uint256 v666;
  uint256 v667;
  uint256 v675;
  uint256 v752;
  }
struct T7 {
  address payable v541;
  uint256 v542;
  address payable v558;
  uint256 v564;
  uint256 v565;
  bool v651;
  uint256 v660;
  uint256 v662;
  uint256 v663;
  uint256 v664;
  uint256 v666;
  uint256 v667;
  uint256 v675;
  }
struct T8 {
  address payable v541;
  uint256 v542;
  address payable v558;
  uint256 v564;
  uint256 v565;
  bool v651;
  uint256 v660;
  uint256 v661;
  uint256 v662;
  uint256 v663;
  uint256 v664;
  uint256 v665;
  uint256 v666;
  uint256 v667;
  uint256 v675;
  }
struct T9 {
  address payable v541;
  uint256 v542;
  address payable v558;
  uint256 v564;
  uint256 v565;
  bool v651;
  uint256 v660;
  uint256 v662;
  uint256 v663;
  uint256 v664;
  uint256 v665;
  uint256 v666;
  uint256 v667;
  uint256 v675;
  uint256 v818;
  }
struct T10 {
  address payable v541;
  uint256 v542;
  address payable v558;
  uint256 v564;
  uint256 v565;
  bool v651;
  uint256 v660;
  uint256 v662;
  uint256 v663;
  uint256 v664;
  uint256 v665;
  uint256 v666;
  uint256 v667;
  uint256 v675;
  }
struct T11 {
  uint256 elem0;
  uint256 elem1;
  uint256 elem2;
  }
struct T12 {
  address payable v541;
  uint256 v542;
  address payable v558;
  uint256 v564;
  uint256 v565;
  uint256 v573;
  uint256 v587;
  uint256 v595;
  }
struct T13 {
  address payable v541;
  uint256 v542;
  address payable v558;
  uint256 v564;
  uint256 v565;
  uint256 v573;
  uint256 v609;
  uint256 v610;
  uint256 v620;
  }
struct T14 {
  uint256 elem0;
  uint256 elem1;
  uint256 elem2;
  }
contract ReachContract is Stdlib {
  uint256 current_step;
  uint256 current_time;
    bytes current_svbs;
  uint256 creation_time;
     bool locked;
  function _reachCreationTime() external view returns (uint256) { return creation_time; }
  function _reachCurrentTime() external view returns (uint256) { return current_time; }
  function _reachCurrentState() external view returns (uint256, bytes memory) { return (current_step, current_svbs); }
  event _reach_e0(address _who, T0 _a);
  event _reach_e1(address _who, T2 _a);
  event _reach_e10(address _who, T0 _a);
  event _reach_e11(address _who, T2 _a);
  event _reach_e12(address _who, T0 _a);
  event _reach_e13(address _who, T2 _a);
  event _reach_e14(address _who, T2 _a);
  event _reach_e15(address _who, T2 _a);
  event _reach_e16(address _who, T0 _a);
  event _reach_e17(address _who, T2 _a);
  event _reach_e18(address _who, T2 _a);
  event _reach_e2(address _who, T2 _a);
  event _reach_e4(address _who, T11 _a);
  event _reach_e5(address _who, T2 _a);
  event _reach_e6(address _who, T14 _a);
  event _reach_e7(address _who, T2 _a);
  event _reach_e9(address _who, T0 _a);
  receive () external payable {}
  fallback () external payable {}
  struct Memory {
    bool nil;
    }
  function _reachi_0(T0 memory _a, Memory memory _Memory) internal  {
    reachRequire((! locked), uint256(7) /*'locked'*/);
    emit _reach_e0(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(8) /*'time check at ./index.rsh:83:10:dot'*/);
    reachRequire((msg.value == (_a.elem1)), uint256(9) /*'(./index.rsh:83:10:dot,[],"verify network token pay amount")'*/);
    T1 memory nsvs;
    nsvs.v541 = payable(msg.sender);
    nsvs.v542 = (_a.elem1);
    nsvs.v553 = (safeAdd(uint256(block.number), uint256(20)));
    current_step = uint256(1);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    }
  struct _F1615 {
    uint256 v561;
    }
  function _reachi_1(T2 memory _a, Memory memory _Memory) internal  {
    _F1615 memory _f;
    reachRequire((current_step == uint256(1)), uint256(10) /*'state check at ./index.rsh:93:10:dot'*/);
    (T1 memory _svs) = abi.decode(current_svbs, (T1));
    reachRequire((! locked), uint256(11) /*'locked'*/);
    emit _reach_e1(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(12) /*'time check at ./index.rsh:93:10:dot'*/);
    reachRequire((uint256(block.number) < _svs.v553), uint256(13) /*'timeout check at ./index.rsh:93:10:dot'*/);
    _f.v561 = safeAdd(_svs.v542, uint256(5000000));
    reachRequire((msg.value == _f.v561), uint256(14) /*'(./index.rsh:93:10:dot,[],"verify network token pay amount")'*/);
    T3  memory _ja;
    _ja.elem0 = _svs.v541;
    _ja.elem1 = _svs.v542;
    _ja.elem2 = payable(msg.sender);
    _ja.elem3 = uint256(0);
    _ja.elem4 = uint256(0);
    _ja.elem5 = uint256(block.number);
    _ja.elem6 = (unsafeAdd(_svs.v542, _f.v561));
    _reachl_3(_ja, _Memory);
    }
  struct _F1616 {
    bool v719;
    uint256 v725;
    }
  function _reachi_10(T0 memory _a, Memory memory _Memory) internal  {
    _F1616 memory _f;
    reachRequire((current_step == uint256(11)), uint256(15) /*'state check at ./index.rsh:184:16:dot'*/);
    (T4 memory _svs) = abi.decode(current_svbs, (T4));
    reachRequire((! locked), uint256(16) /*'locked'*/);
    emit _reach_e10(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(17) /*'time check at ./index.rsh:184:16:dot'*/);
    reachRequire((uint256(block.number) < _svs.v705), uint256(18) /*'timeout check at ./index.rsh:184:16:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(19) /*'(./index.rsh:184:16:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v541 == payable(msg.sender))), uint256(20) /*'(./index.rsh:184:16:dot,[],Just "sender correct")'*/);
    _f.v719 = (_a.elem1) == uint256(1);
    if (_f.v719) {
      _f.v725 = (safeAdd(_svs.v664, uint256(1)));
      }
    else {
      _f.v725 = _svs.v664;
      }
    T5  memory _ja;
    _ja.elem0 = _svs.v541;
    _ja.elem1 = _svs.v542;
    _ja.elem2 = _svs.v558;
    _ja.elem3 = _svs.v564;
    _ja.elem4 = _svs.v565;
    _ja.elem5 = _svs.v651;
    _ja.elem6 = _svs.v660;
    _ja.elem7 = uint256(1);
    _ja.elem8 = _svs.v662;
    _ja.elem9 = _svs.v663;
    _ja.elem10 = _f.v725;
    _ja.elem11 = (((_a.elem1) < uint256(1)) ? uint256(0) : uint256(1));
    _ja.elem12 = (safeAdd(_svs.v666, (_f.v719 ? uint256(11) : (((_a.elem1) < uint256(10)) ? (_a.elem1) : uint256(10)))));
    _ja.elem13 = uint256(1);
    _ja.elem14 = uint256(block.number);
    _ja.elem15 = _svs.v675;
    _reachl_8(_ja, _Memory);
    }
  function _reachi_11(T2 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(11)), uint256(21) /*'state check at reach standard library:197:11:dot'*/);
    (T4 memory _svs) = abi.decode(current_svbs, (T4));
    reachRequire((! locked), uint256(22) /*'locked'*/);
    emit _reach_e11(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(23) /*'time check at reach standard library:197:11:dot'*/);
    reachRequire((uint256(block.number) >= _svs.v705), uint256(24) /*'timeout check at reach standard library:197:11:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(25) /*'(reach standard library:197:11:dot,[at ./index.rsh:185:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],"verify network token pay amount")'*/);
    reachRequire((((_svs.v558 == payable(msg.sender)) ? true : (_svs.v541 == payable(msg.sender)))), uint256(26) /*'(reach standard library:197:11:dot,[at ./index.rsh:185:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],Just "sender correct")'*/);
    _svs.v558.transfer(_svs.v675);
    current_step = 0x0;
    current_time = 0x0;
    delete current_svbs;
    }
  struct _F1618 {
    bool v763;
    }
  function _reachi_12(T0 memory _a, Memory memory _Memory) internal  {
    _F1618 memory _f;
    reachRequire((current_step == uint256(13)), uint256(27) /*'state check at ./index.rsh:207:16:dot'*/);
    (T6 memory _svs) = abi.decode(current_svbs, (T6));
    reachRequire((! locked), uint256(28) /*'locked'*/);
    emit _reach_e12(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(29) /*'time check at ./index.rsh:207:16:dot'*/);
    reachRequire((uint256(block.number) < _svs.v752), uint256(30) /*'timeout check at ./index.rsh:207:16:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(31) /*'(./index.rsh:207:16:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v558 == payable(msg.sender))), uint256(32) /*'(./index.rsh:207:16:dot,[],Just "sender correct")'*/);
    _f.v763 = (_a.elem1) == uint256(1);
    T5  memory _ja;
    _ja.elem0 = _svs.v541;
    _ja.elem1 = _svs.v542;
    _ja.elem2 = _svs.v558;
    _ja.elem3 = _svs.v564;
    _ja.elem4 = _svs.v565;
    _ja.elem5 = _svs.v651;
    _ja.elem6 = (safeAdd((_f.v763 ? uint256(1) : uint256(0)), (_svs.v651 ? uint256(1) : uint256(0))));
    _ja.elem7 = _svs.v661;
    _ja.elem8 = (safeAdd(_svs.v662, (_f.v763 ? uint256(11) : (((_a.elem1) < uint256(10)) ? (_a.elem1) : uint256(10)))));
    _ja.elem9 = uint256(1);
    _ja.elem10 = _svs.v664;
    _ja.elem11 = _svs.v665;
    _ja.elem12 = _svs.v666;
    _ja.elem13 = _svs.v667;
    _ja.elem14 = uint256(block.number);
    _ja.elem15 = _svs.v675;
    _reachl_8(_ja, _Memory);
    }
  function _reachi_13(T2 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(13)), uint256(33) /*'state check at reach standard library:197:11:dot'*/);
    (T6 memory _svs) = abi.decode(current_svbs, (T6));
    reachRequire((! locked), uint256(34) /*'locked'*/);
    emit _reach_e13(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(35) /*'time check at reach standard library:197:11:dot'*/);
    reachRequire((uint256(block.number) >= _svs.v752), uint256(36) /*'timeout check at reach standard library:197:11:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(37) /*'(reach standard library:197:11:dot,[at ./index.rsh:208:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],"verify network token pay amount")'*/);
    reachRequire((((_svs.v558 == payable(msg.sender)) ? true : (_svs.v541 == payable(msg.sender)))), uint256(38) /*'(reach standard library:197:11:dot,[at ./index.rsh:208:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],Just "sender correct")'*/);
    _svs.v541.transfer(_svs.v675);
    current_step = 0x0;
    current_time = 0x0;
    delete current_svbs;
    }
  function _reachi_14(T2 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(15)), uint256(39) /*'state check at ./index.rsh:225:18:dot'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    reachRequire((! locked), uint256(40) /*'locked'*/);
    emit _reach_e14(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(41) /*'time check at ./index.rsh:225:18:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(42) /*'(./index.rsh:225:18:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v558 == payable(msg.sender))), uint256(43) /*'(./index.rsh:225:18:dot,[],Just "sender correct")'*/);
    T5  memory _ja;
    _ja.elem0 = _svs.v541;
    _ja.elem1 = _svs.v542;
    _ja.elem2 = _svs.v558;
    _ja.elem3 = _svs.v564;
    _ja.elem4 = _svs.v565;
    _ja.elem5 = _svs.v651;
    _ja.elem6 = _svs.v660;
    _ja.elem7 = uint256(0);
    _ja.elem8 = _svs.v662;
    _ja.elem9 = _svs.v663;
    _ja.elem10 = _svs.v664;
    _ja.elem11 = uint256(0);
    _ja.elem12 = _svs.v666;
    _ja.elem13 = _svs.v667;
    _ja.elem14 = uint256(block.number);
    _ja.elem15 = _svs.v675;
    _reachl_8(_ja, _Memory);
    }
  function _reachi_15(T2 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(16)), uint256(44) /*'state check at ./index.rsh:235:20:dot'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    reachRequire((! locked), uint256(45) /*'locked'*/);
    emit _reach_e15(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(46) /*'time check at ./index.rsh:235:20:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(47) /*'(./index.rsh:235:20:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v558 == payable(msg.sender))), uint256(48) /*'(./index.rsh:235:20:dot,[],Just "sender correct")'*/);
    T5  memory _ja;
    _ja.elem0 = _svs.v541;
    _ja.elem1 = _svs.v542;
    _ja.elem2 = _svs.v558;
    _ja.elem3 = _svs.v564;
    _ja.elem4 = _svs.v565;
    _ja.elem5 = _svs.v651;
    _ja.elem6 = (safeSub(_svs.v660, uint256(1)));
    _ja.elem7 = _svs.v661;
    _ja.elem8 = (safeSub(_svs.v662, uint256(10)));
    _ja.elem9 = _svs.v663;
    _ja.elem10 = _svs.v664;
    _ja.elem11 = _svs.v665;
    _ja.elem12 = _svs.v666;
    _ja.elem13 = _svs.v667;
    _ja.elem14 = uint256(block.number);
    _ja.elem15 = _svs.v675;
    _reachl_8(_ja, _Memory);
    }
  struct _F1622 {
    bool v830;
    uint256 v836;
    }
  function _reachi_16(T0 memory _a, Memory memory _Memory) internal  {
    _F1622 memory _f;
    reachRequire((current_step == uint256(17)), uint256(49) /*'state check at ./index.rsh:248:24:dot'*/);
    (T9 memory _svs) = abi.decode(current_svbs, (T9));
    reachRequire((! locked), uint256(50) /*'locked'*/);
    emit _reach_e16(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(51) /*'time check at ./index.rsh:248:24:dot'*/);
    reachRequire((uint256(block.number) < _svs.v818), uint256(52) /*'timeout check at ./index.rsh:248:24:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(53) /*'(./index.rsh:248:24:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v558 == payable(msg.sender))), uint256(54) /*'(./index.rsh:248:24:dot,[],Just "sender correct")'*/);
    _f.v830 = (_a.elem1) == uint256(1);
    if (_f.v830) {
      _f.v836 = (safeAdd(_svs.v660, uint256(1)));
      }
    else {
      _f.v836 = _svs.v660;
      }
    T5  memory _ja;
    _ja.elem0 = _svs.v541;
    _ja.elem1 = _svs.v542;
    _ja.elem2 = _svs.v558;
    _ja.elem3 = _svs.v564;
    _ja.elem4 = _svs.v565;
    _ja.elem5 = _svs.v651;
    _ja.elem6 = _f.v836;
    _ja.elem7 = uint256(1);
    _ja.elem8 = (safeAdd(_svs.v662, (_f.v830 ? uint256(11) : (((_a.elem1) < uint256(10)) ? (_a.elem1) : uint256(10)))));
    _ja.elem9 = _svs.v663;
    _ja.elem10 = _svs.v664;
    _ja.elem11 = _svs.v665;
    _ja.elem12 = _svs.v666;
    _ja.elem13 = _svs.v667;
    _ja.elem14 = uint256(block.number);
    _ja.elem15 = _svs.v675;
    _reachl_8(_ja, _Memory);
    }
  function _reachi_17(T2 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(17)), uint256(55) /*'state check at reach standard library:197:11:dot'*/);
    (T9 memory _svs) = abi.decode(current_svbs, (T9));
    reachRequire((! locked), uint256(56) /*'locked'*/);
    emit _reach_e17(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(57) /*'time check at reach standard library:197:11:dot'*/);
    reachRequire((uint256(block.number) >= _svs.v818), uint256(58) /*'timeout check at reach standard library:197:11:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(59) /*'(reach standard library:197:11:dot,[at ./index.rsh:249:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],"verify network token pay amount")'*/);
    reachRequire((((_svs.v558 == payable(msg.sender)) ? true : (_svs.v541 == payable(msg.sender)))), uint256(60) /*'(reach standard library:197:11:dot,[at ./index.rsh:249:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],Just "sender correct")'*/);
    _svs.v541.transfer(_svs.v675);
    current_step = 0x0;
    current_time = 0x0;
    delete current_svbs;
    }
  function _reachi_18(T2 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(19)), uint256(61) /*'state check at ./index.rsh:261:22:dot'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    reachRequire((! locked), uint256(62) /*'locked'*/);
    emit _reach_e18(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(63) /*'time check at ./index.rsh:261:22:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(64) /*'(./index.rsh:261:22:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v558 == payable(msg.sender))), uint256(65) /*'(./index.rsh:261:22:dot,[],Just "sender correct")'*/);
    T5  memory _ja;
    _ja.elem0 = _svs.v541;
    _ja.elem1 = _svs.v542;
    _ja.elem2 = _svs.v558;
    _ja.elem3 = _svs.v564;
    _ja.elem4 = _svs.v565;
    _ja.elem5 = _svs.v651;
    _ja.elem6 = _svs.v660;
    _ja.elem7 = uint256(0);
    _ja.elem8 = _svs.v662;
    _ja.elem9 = _svs.v663;
    _ja.elem10 = _svs.v664;
    _ja.elem11 = _svs.v665;
    _ja.elem12 = _svs.v666;
    _ja.elem13 = _svs.v667;
    _ja.elem14 = uint256(block.number);
    _ja.elem15 = _svs.v675;
    _reachl_8(_ja, _Memory);
    }
  function _reachi_2(T2 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(1)), uint256(66) /*'state check at reach standard library:197:11:dot'*/);
    (T1 memory _svs) = abi.decode(current_svbs, (T1));
    reachRequire((! locked), uint256(67) /*'locked'*/);
    emit _reach_e2(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(68) /*'time check at reach standard library:197:11:dot'*/);
    reachRequire((uint256(block.number) >= _svs.v553), uint256(69) /*'timeout check at reach standard library:197:11:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(70) /*'(reach standard library:197:11:dot,[at ./index.rsh:94:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],"verify network token pay amount")'*/);
    _svs.v541.transfer(_svs.v542);
    current_step = 0x0;
    current_time = 0x0;
    delete current_svbs;
    }
  function _reachi_4(T11 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(5)), uint256(71) /*'state check at ./index.rsh:118:12:dot'*/);
    (T12 memory _svs) = abi.decode(current_svbs, (T12));
    reachRequire((! locked), uint256(72) /*'locked'*/);
    emit _reach_e4(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(73) /*'time check at ./index.rsh:118:12:dot'*/);
    reachRequire((uint256(block.number) >= _svs.v587), uint256(74) /*'timeout check at ./index.rsh:118:12:dot'*/);
    reachRequire((uint256(block.number) < _svs.v595), uint256(75) /*'timeout check at ./index.rsh:118:12:dot'*/);
    
    reachRequire((msg.value == uint256(0)), uint256(76) /*'(./index.rsh:118:12:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v541 == payable(msg.sender))), uint256(77) /*'(./index.rsh:118:12:dot,[],Just "sender correct")'*/);
    T13 memory nsvs;
    nsvs.v541 = _svs.v541;
    nsvs.v542 = _svs.v542;
    nsvs.v558 = _svs.v558;
    nsvs.v564 = _svs.v564;
    nsvs.v565 = _svs.v565;
    nsvs.v573 = _svs.v573;
    nsvs.v609 = (_a.elem1);
    nsvs.v610 = (_a.elem2);
    nsvs.v620 = (safeAdd(uint256(block.number), uint256(20)));
    current_step = uint256(7);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    }
  function _reachi_5(T2 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(5)), uint256(78) /*'state check at reach standard library:197:11:dot'*/);
    (T12 memory _svs) = abi.decode(current_svbs, (T12));
    reachRequire((! locked), uint256(79) /*'locked'*/);
    emit _reach_e5(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(80) /*'time check at reach standard library:197:11:dot'*/);
    reachRequire((uint256(block.number) >= _svs.v595), uint256(81) /*'timeout check at reach standard library:197:11:dot'*/);
    
    reachRequire((msg.value == uint256(0)), uint256(82) /*'(reach standard library:197:11:dot,[at ./index.rsh:119:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],"verify network token pay amount")'*/);
    reachRequire((((_svs.v558 == payable(msg.sender)) ? true : (_svs.v541 == payable(msg.sender)))), uint256(83) /*'(reach standard library:197:11:dot,[at ./index.rsh:119:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],Just "sender correct")'*/);
    _svs.v558.transfer(_svs.v573);
    current_step = 0x0;
    current_time = 0x0;
    delete current_svbs;
    }
  struct _F1628 {
    bool v642;
    bool v646;
    bool v651;
    }
  function _reachi_6(T14 memory _a, Memory memory _Memory) internal  {
    _F1628 memory _f;
    reachRequire((current_step == uint256(7)), uint256(84) /*'state check at ./index.rsh:133:12:dot'*/);
    (T13 memory _svs) = abi.decode(current_svbs, (T13));
    reachRequire((! locked), uint256(85) /*'locked'*/);
    emit _reach_e6(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(86) /*'time check at ./index.rsh:133:12:dot'*/);
    reachRequire((uint256(block.number) < _svs.v620), uint256(87) /*'timeout check at ./index.rsh:133:12:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(88) /*'(./index.rsh:133:12:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v558 == payable(msg.sender))), uint256(89) /*'(./index.rsh:133:12:dot,[],Just "sender correct")'*/);
    _f.v642 = _svs.v609 == uint256(1);
    _f.v646 = _svs.v610 == uint256(1);
    _f.v651 = (_a.elem2) == uint256(1);
    T5  memory _ja;
    _ja.elem0 = _svs.v541;
    _ja.elem1 = _svs.v542;
    _ja.elem2 = _svs.v558;
    _ja.elem3 = _svs.v564;
    _ja.elem4 = _svs.v565;
    _ja.elem5 = _f.v651;
    _ja.elem6 = uint256(0);
    _ja.elem7 = uint256(1);
    _ja.elem8 = (_f.v651 ? uint256(11) : (((_a.elem2) < uint256(10)) ? (_a.elem2) : uint256(10)));
    _ja.elem9 = uint256(0);
    _ja.elem10 = (safeAdd((_f.v642 ? uint256(1) : uint256(0)), (_f.v646 ? uint256(1) : uint256(0))));
    _ja.elem11 = uint256(1);
    _ja.elem12 = (safeAdd((_f.v642 ? uint256(11) : ((_svs.v609 < uint256(10)) ? _svs.v609 : uint256(10))), (_f.v646 ? uint256(11) : ((_svs.v610 < uint256(10)) ? _svs.v610 : uint256(10)))));
    _ja.elem13 = uint256(0);
    _ja.elem14 = uint256(block.number);
    _ja.elem15 = _svs.v573;
    _reachl_8(_ja, _Memory);
    }
  function _reachi_7(T2 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(7)), uint256(90) /*'state check at reach standard library:197:11:dot'*/);
    (T13 memory _svs) = abi.decode(current_svbs, (T13));
    reachRequire((! locked), uint256(91) /*'locked'*/);
    emit _reach_e7(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(92) /*'time check at reach standard library:197:11:dot'*/);
    reachRequire((uint256(block.number) >= _svs.v620), uint256(93) /*'timeout check at reach standard library:197:11:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(94) /*'(reach standard library:197:11:dot,[at ./index.rsh:134:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],"verify network token pay amount")'*/);
    reachRequire((((_svs.v558 == payable(msg.sender)) ? true : (_svs.v541 == payable(msg.sender)))), uint256(95) /*'(reach standard library:197:11:dot,[at ./index.rsh:134:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],Just "sender correct")'*/);
    _svs.v541.transfer(_svs.v573);
    current_step = 0x0;
    current_time = 0x0;
    delete current_svbs;
    }
  function _reachi_9(T0 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(10)), uint256(96) /*'state check at ./index.rsh:162:16:dot'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    reachRequire((! locked), uint256(97) /*'locked'*/);
    emit _reach_e9(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(98) /*'time check at ./index.rsh:162:16:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(99) /*'(./index.rsh:162:16:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v541 == payable(msg.sender))), uint256(100) /*'(./index.rsh:162:16:dot,[],Just "sender correct")'*/);
    if (((_a.elem1) == uint256(1))) {
      T5  memory _ja;
      _ja.elem0 = _svs.v541;
      _ja.elem1 = _svs.v542;
      _ja.elem2 = _svs.v558;
      _ja.elem3 = _svs.v564;
      _ja.elem4 = _svs.v565;
      _ja.elem5 = _svs.v651;
      _ja.elem6 = _svs.v660;
      _ja.elem7 = _svs.v661;
      _ja.elem8 = _svs.v662;
      _ja.elem9 = _svs.v663;
      _ja.elem10 = (safeSub(_svs.v664, uint256(1)));
      _ja.elem11 = _svs.v665;
      _ja.elem12 = (safeSub(_svs.v666, uint256(10)));
      _ja.elem13 = _svs.v667;
      _ja.elem14 = uint256(block.number);
      _ja.elem15 = _svs.v675;
      _reachl_8(_ja, _Memory);
      }
    else {
      T5  memory _ja;
      _ja.elem0 = _svs.v541;
      _ja.elem1 = _svs.v542;
      _ja.elem2 = _svs.v558;
      _ja.elem3 = _svs.v564;
      _ja.elem4 = _svs.v565;
      _ja.elem5 = _svs.v651;
      _ja.elem6 = _svs.v660;
      _ja.elem7 = _svs.v661;
      _ja.elem8 = _svs.v662;
      _ja.elem9 = _svs.v663;
      _ja.elem10 = (safeSub(_svs.v664, uint256(1)));
      _ja.elem11 = _svs.v665;
      _ja.elem12 = _svs.v666;
      _ja.elem13 = _svs.v667;
      _ja.elem14 = uint256(block.number);
      _ja.elem15 = _svs.v675;
      _reachl_8(_ja, _Memory);
      }
    }
  struct _F1631 {
    uint256 v587;
    }
  function _reachl_3(T3 memory _a, Memory memory _Memory) internal  {
    _F1631 memory _f;
    if (((_a.elem4 < uint256(3)) ? (_a.elem3 < uint256(3)) : false)) {
      _f.v587 = safeAdd(_a.elem5, uint256(2));
      T12 memory nsvs;
      nsvs.v541 = _a.elem0;
      nsvs.v542 = _a.elem1;
      nsvs.v558 = _a.elem2;
      nsvs.v564 = _a.elem3;
      nsvs.v565 = _a.elem4;
      nsvs.v573 = _a.elem6;
      nsvs.v587 = _f.v587;
      nsvs.v595 = (safeAdd(_f.v587, uint256(20)));
      current_step = uint256(5);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      ((_a.elem4 > _a.elem3) ? _a.elem0 : _a.elem2).transfer((safeAdd((safeMul(uint256(2), _a.elem1)), uint256(5000000))));
      current_step = 0x0;
      current_time = 0x0;
      delete current_svbs;
      }
    }
  struct _F1632 {
    bool v680;
    uint256 v862;
    }
  function _reachl_8(T5 memory _a, Memory memory _Memory) internal  {
    _F1632 memory _f;
    _f.v680 = _a.elem11 == uint256(1);
    if ((_f.v680 ? true : (_a.elem7 == uint256(1)))) {
      if ((_a.elem10 > uint256(0))) {
        T8 memory nsvs;
        nsvs.v541 = _a.elem0;
        nsvs.v542 = _a.elem1;
        nsvs.v558 = _a.elem2;
        nsvs.v564 = _a.elem3;
        nsvs.v565 = _a.elem4;
        nsvs.v651 = _a.elem5;
        nsvs.v660 = _a.elem6;
        nsvs.v661 = _a.elem7;
        nsvs.v662 = _a.elem8;
        nsvs.v663 = _a.elem9;
        nsvs.v664 = _a.elem10;
        nsvs.v665 = _a.elem11;
        nsvs.v666 = _a.elem12;
        nsvs.v667 = _a.elem13;
        nsvs.v675 = _a.elem15;
        current_step = uint256(10);
        current_time = uint256(block.number);
        current_svbs = abi.encode(nsvs);
        }
      else {
        if ((_f.v680 ? (_a.elem12 < uint256(21)) : false)) {
          T4 memory nsvs;
          nsvs.v541 = _a.elem0;
          nsvs.v542 = _a.elem1;
          nsvs.v558 = _a.elem2;
          nsvs.v564 = _a.elem3;
          nsvs.v565 = _a.elem4;
          nsvs.v651 = _a.elem5;
          nsvs.v660 = _a.elem6;
          nsvs.v662 = _a.elem8;
          nsvs.v663 = _a.elem9;
          nsvs.v664 = _a.elem10;
          nsvs.v666 = _a.elem12;
          nsvs.v675 = _a.elem15;
          nsvs.v705 = (safeAdd(_a.elem14, uint256(20)));
          current_step = uint256(11);
          current_time = uint256(block.number);
          current_svbs = abi.encode(nsvs);
          }
        else {
          if ((_a.elem9 == uint256(0))) {
            T6 memory nsvs;
            nsvs.v541 = _a.elem0;
            nsvs.v542 = _a.elem1;
            nsvs.v558 = _a.elem2;
            nsvs.v564 = _a.elem3;
            nsvs.v565 = _a.elem4;
            nsvs.v651 = _a.elem5;
            nsvs.v661 = _a.elem7;
            nsvs.v662 = _a.elem8;
            nsvs.v664 = _a.elem10;
            nsvs.v665 = _a.elem11;
            nsvs.v666 = _a.elem12;
            nsvs.v667 = _a.elem13;
            nsvs.v675 = _a.elem15;
            nsvs.v752 = (safeAdd(_a.elem14, uint256(20)));
            current_step = uint256(13);
            current_time = uint256(block.number);
            current_svbs = abi.encode(nsvs);
            }
          else {
            if ((((_a.elem13 == uint256(0)) ? (_a.elem12 == uint256(21)) : false) ? true : (_a.elem12 > uint256(21)))) {
              T7 memory nsvs;
              nsvs.v541 = _a.elem0;
              nsvs.v542 = _a.elem1;
              nsvs.v558 = _a.elem2;
              nsvs.v564 = _a.elem3;
              nsvs.v565 = _a.elem4;
              nsvs.v651 = _a.elem5;
              nsvs.v660 = _a.elem6;
              nsvs.v662 = _a.elem8;
              nsvs.v663 = _a.elem9;
              nsvs.v664 = _a.elem10;
              nsvs.v666 = _a.elem12;
              nsvs.v667 = _a.elem13;
              nsvs.v675 = _a.elem15;
              current_step = uint256(15);
              current_time = uint256(block.number);
              current_svbs = abi.encode(nsvs);
              }
            else {
              if (((_a.elem8 > uint256(21)) ? (_a.elem6 > uint256(0)) : false)) {
                T8 memory nsvs;
                nsvs.v541 = _a.elem0;
                nsvs.v542 = _a.elem1;
                nsvs.v558 = _a.elem2;
                nsvs.v564 = _a.elem3;
                nsvs.v565 = _a.elem4;
                nsvs.v651 = _a.elem5;
                nsvs.v660 = _a.elem6;
                nsvs.v661 = _a.elem7;
                nsvs.v662 = _a.elem8;
                nsvs.v663 = _a.elem9;
                nsvs.v664 = _a.elem10;
                nsvs.v665 = _a.elem11;
                nsvs.v666 = _a.elem12;
                nsvs.v667 = _a.elem13;
                nsvs.v675 = _a.elem15;
                current_step = uint256(16);
                current_time = uint256(block.number);
                current_svbs = abi.encode(nsvs);
                }
              else {
                if (((_a.elem8 < _a.elem12) ? (_a.elem8 < uint256(21)) : false)) {
                  T9 memory nsvs;
                  nsvs.v541 = _a.elem0;
                  nsvs.v542 = _a.elem1;
                  nsvs.v558 = _a.elem2;
                  nsvs.v564 = _a.elem3;
                  nsvs.v565 = _a.elem4;
                  nsvs.v651 = _a.elem5;
                  nsvs.v660 = _a.elem6;
                  nsvs.v662 = _a.elem8;
                  nsvs.v663 = _a.elem9;
                  nsvs.v664 = _a.elem10;
                  nsvs.v665 = _a.elem11;
                  nsvs.v666 = _a.elem12;
                  nsvs.v667 = _a.elem13;
                  nsvs.v675 = _a.elem15;
                  nsvs.v818 = (safeAdd(_a.elem14, uint256(20)));
                  current_step = uint256(17);
                  current_time = uint256(block.number);
                  current_svbs = abi.encode(nsvs);
                  }
                else {
                  T10 memory nsvs;
                  nsvs.v541 = _a.elem0;
                  nsvs.v542 = _a.elem1;
                  nsvs.v558 = _a.elem2;
                  nsvs.v564 = _a.elem3;
                  nsvs.v565 = _a.elem4;
                  nsvs.v651 = _a.elem5;
                  nsvs.v660 = _a.elem6;
                  nsvs.v662 = _a.elem8;
                  nsvs.v663 = _a.elem9;
                  nsvs.v664 = _a.elem10;
                  nsvs.v665 = _a.elem11;
                  nsvs.v666 = _a.elem12;
                  nsvs.v667 = _a.elem13;
                  nsvs.v675 = _a.elem15;
                  current_step = uint256(19);
                  current_time = uint256(block.number);
                  current_svbs = abi.encode(nsvs);
                  }
                }
              }
            }
          }
        }
      }
    else {
      _f.v862 = ((_a.elem12 > uint256(21)) ? true : ((_a.elem8 < uint256(22)) ? (_a.elem8 > _a.elem12) : false)) ? uint256(1) : (((_a.elem12 < uint256(22)) ? ((_a.elem12 > _a.elem8) ? true : (_a.elem8 > uint256(21))) : false) ? uint256(0) : uint256(2));
      if ((_f.v862 == uint256(0))) {
        T3  memory _ja;
        _ja.elem0 = _a.elem0;
        _ja.elem1 = _a.elem1;
        _ja.elem2 = _a.elem2;
        _ja.elem3 = _a.elem3;
        _ja.elem4 = (safeAdd(_a.elem4, uint256(1)));
        _ja.elem5 = _a.elem14;
        _ja.elem6 = _a.elem15;
        _reachl_3(_ja, _Memory);
        }
      else {
        if ((_f.v862 == uint256(1))) {
          T3  memory _ja;
          _ja.elem0 = _a.elem0;
          _ja.elem1 = _a.elem1;
          _ja.elem2 = _a.elem2;
          _ja.elem3 = (safeAdd(_a.elem3, uint256(1)));
          _ja.elem4 = _a.elem4;
          _ja.elem5 = _a.elem14;
          _ja.elem6 = _a.elem15;
          _reachl_3(_ja, _Memory);
          }
        else {
          T3  memory _ja;
          _ja.elem0 = _a.elem0;
          _ja.elem1 = _a.elem1;
          _ja.elem2 = _a.elem2;
          _ja.elem3 = _a.elem3;
          _ja.elem4 = _a.elem4;
          _ja.elem5 = _a.elem14;
          _ja.elem6 = _a.elem15;
          _reachl_3(_ja, _Memory);
          }
        }
      }
    }
  constructor(T0 memory v1565) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    Memory memory _Memory;
    _reachi_0(v1565, _Memory);
    }
  function _reachp_1(T2 calldata v1568) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_1(v1568, _Memory);
    }
  function _reachp_10(T0 calldata v1589) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_10(v1589, _Memory);
    }
  function _reachp_11(T2 calldata v1592) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_11(v1592, _Memory);
    }
  function _reachp_12(T0 calldata v1595) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_12(v1595, _Memory);
    }
  function _reachp_13(T2 calldata v1598) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_13(v1598, _Memory);
    }
  function _reachp_14(T2 calldata v1601) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_14(v1601, _Memory);
    }
  function _reachp_15(T2 calldata v1604) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_15(v1604, _Memory);
    }
  function _reachp_16(T0 calldata v1607) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_16(v1607, _Memory);
    }
  function _reachp_17(T2 calldata v1610) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_17(v1610, _Memory);
    }
  function _reachp_18(T2 calldata v1613) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_18(v1613, _Memory);
    }
  function _reachp_2(T2 calldata v1571) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_2(v1571, _Memory);
    }
  function _reachp_4(T11 calldata v1574) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_4(v1574, _Memory);
    }
  function _reachp_5(T2 calldata v1577) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_5(v1577, _Memory);
    }
  function _reachp_6(T14 calldata v1580) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_6(v1580, _Memory);
    }
  function _reachp_7(T2 calldata v1583) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_7(v1583, _Memory);
    }
  function _reachp_9(T0 calldata v1586) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_9(v1586, _Memory);
    }
  }
