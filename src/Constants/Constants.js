export const polygonContractAddress= ""
export const ShardeumContractAddress= ""
export const ETHContractAddress= "0x2f84f71c5Ce8a6341fD469069E4a1545200C6D84" // Goerli TestNet

export const contractABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "nativeTokenDeposite",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokenDeposite",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"name": "deposite",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "depositeNative",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"name": "receivedAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "receivedNative",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawNative",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
export const contractByteCode = {
	"functionDebugData": {
		"@_23": {
			"entryPoint": null,
			"id": 23,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"@_msgSender_194": {
			"entryPoint": 50,
			"id": 194,
			"parameterSlots": 0,
			"returnSlots": 1
		},
		"@_transferOwnership_103": {
			"entryPoint": 58,
			"id": 103,
			"parameterSlots": 1,
			"returnSlots": 0
		}
	},
	"generatedSources": [],
	"linkReferences": {},
	"object": "608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610e9b8061010d6000396000f3fe6080604052600436106100865760003560e01c8063715018a611610059578063715018a6146101245780638da5cb5b1461013b57806396de773414610166578063d1c6ef9214610182578063f2fde38b146101ad57610086565b80630cb1d0ee1461008b5780633b51a8b0146100c857806350431ce4146100e457806351cff8d9146100fb575b600080fd5b34801561009757600080fd5b506100b260048036038101906100ad919061096c565b6101d6565b6040516100bf9190610c80565b60405180910390f35b6100e260048036038101906100dd9190610a20565b61026d565b005b3480156100f057600080fd5b506100f9610380565b005b34801561010757600080fd5b50610122600480360381019061011d919061096c565b61047c565b005b34801561013057600080fd5b50610139610655565b005b34801561014757600080fd5b506101506106dd565b60405161015d9190610b65565b60405180910390f35b610180600480360381019061017b91906109c6565b610706565b005b34801561018e57600080fd5b5061019761074c565b6040516101a49190610c80565b60405180910390f35b3480156101b957600080fd5b506101d460048036038101906101cf919061096c565b610754565b005b6000808290508073ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b81526004016102159190610b65565b60206040518083038186803b15801561022d57600080fd5b505afa158015610241573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026591906109f3565b915050919050565b60008190508073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b81526004016102af93929190610b80565b602060405180830381600087803b1580156102c957600080fd5b505af11580156102dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103019190610999565b610340576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033790610c40565b60405180910390fd5b7ffb408329ab46b89fe59d3d1f7de52a8b62f0c22c2dea3f9b91c11164343a393d33838560405161037393929190610b80565b60405180910390a1505050565b61038861084c565b73ffffffffffffffffffffffffffffffffffffffff166103a66106dd565b73ffffffffffffffffffffffffffffffffffffffff16146103fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f390610c60565b60405180910390fd5b60006104066106dd565b73ffffffffffffffffffffffffffffffffffffffff164760405161042990610b50565b60006040518083038185875af1925050503d8060008114610466576040519150601f19603f3d011682016040523d82523d6000602084013e61046b565b606091505b505090508061047957600080fd5b50565b61048461084c565b73ffffffffffffffffffffffffffffffffffffffff166104a26106dd565b73ffffffffffffffffffffffffffffffffffffffff16146104f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ef90610c60565b60405180910390fd5b60008190508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb338373ffffffffffffffffffffffffffffffffffffffff166370a08231866040518263ffffffff1660e01b81526004016105539190610b65565b60206040518083038186803b15801561056b57600080fd5b505afa15801561057f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a391906109f3565b6040518363ffffffff1660e01b81526004016105c0929190610bb7565b602060405180830381600087803b1580156105da57600080fd5b505af11580156105ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106129190610999565b610651576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064890610c20565b60405180910390fd5b5050565b61065d61084c565b73ffffffffffffffffffffffffffffffffffffffff1661067b6106dd565b73ffffffffffffffffffffffffffffffffffffffff16146106d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c890610c60565b60405180910390fd5b6106db6000610854565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b80341015610749576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074090610be0565b60405180910390fd5b50565b600047905090565b61075c61084c565b73ffffffffffffffffffffffffffffffffffffffff1661077a6106dd565b73ffffffffffffffffffffffffffffffffffffffff16146107d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c790610c60565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610840576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083790610c00565b60405180910390fd5b61084981610854565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008135905061092781610e20565b92915050565b60008151905061093c81610e37565b92915050565b60008135905061095181610e4e565b92915050565b60008151905061096681610e4e565b92915050565b60006020828403121561098257610981610cff565b5b600061099084828501610918565b91505092915050565b6000602082840312156109af576109ae610cff565b5b60006109bd8482850161092d565b91505092915050565b6000602082840312156109dc576109db610cff565b5b60006109ea84828501610942565b91505092915050565b600060208284031215610a0957610a08610cff565b5b6000610a1784828501610957565b91505092915050565b60008060408385031215610a3757610a36610cff565b5b6000610a4585828601610942565b9250506020610a5685828601610918565b9150509250929050565b610a6981610cb7565b82525050565b6000610a7c601f83610ca6565b9150610a8782610d04565b602082019050919050565b6000610a9f602683610ca6565b9150610aaa82610d2d565b604082019050919050565b6000610ac2601583610c9b565b9150610acd82610d7c565b601582019050919050565b6000610ae5601483610ca6565b9150610af082610da5565b602082019050919050565b6000610b08601283610ca6565b9150610b1382610dce565b602082019050919050565b6000610b2b602083610ca6565b9150610b3682610df7565b602082019050919050565b610b4a81610cf5565b82525050565b6000610b5b82610ab5565b9150819050919050565b6000602082019050610b7a6000830184610a60565b92915050565b6000606082019050610b956000830186610a60565b610ba26020830185610a60565b610baf6040830184610b41565b949350505050565b6000604082019050610bcc6000830185610a60565b610bd96020830184610b41565b9392505050565b60006020820190508181036000830152610bf981610a6f565b9050919050565b60006020820190508181036000830152610c1981610a92565b9050919050565b60006020820190508181036000830152610c3981610ad8565b9050919050565b60006020820190508181036000830152610c5981610afb565b9050919050565b60006020820190508181036000830152610c7981610b1e565b9050919050565b6000602082019050610c956000830184610b41565b92915050565b600081905092915050565b600082825260208201905092915050565b6000610cc282610cd5565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600080fd5b7f506c65617365204465706f7369746520436f6d706c65746520616d6f756e7400600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f6e6c79206f776e657220697320616c6c6f7765640000000000000000000000600082015250565b7f4e6f20746f6b656e7320617661696c61626c6521000000000000000000000000600082015250565b7f556e61626c6520746f204465706f736974650000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b610e2981610cb7565b8114610e3457600080fd5b50565b610e4081610cc9565b8114610e4b57600080fd5b50565b610e5781610cf5565b8114610e6257600080fd5b5056fea264697066735822122044b553935ff66ddb02d882251d34b1bb7c7fcd8dd8aba46913fe9c611a80785764736f6c63430008070033",
	"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2D PUSH2 0x22 PUSH2 0x32 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH2 0x3A PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH2 0xFE JUMP JUMPDEST PUSH1 0x0 CALLER SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH1 0x0 DUP1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH2 0xE9B DUP1 PUSH2 0x10D PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x86 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x715018A6 GT PUSH2 0x59 JUMPI DUP1 PUSH4 0x715018A6 EQ PUSH2 0x124 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x13B JUMPI DUP1 PUSH4 0x96DE7734 EQ PUSH2 0x166 JUMPI DUP1 PUSH4 0xD1C6EF92 EQ PUSH2 0x182 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x1AD JUMPI PUSH2 0x86 JUMP JUMPDEST DUP1 PUSH4 0xCB1D0EE EQ PUSH2 0x8B JUMPI DUP1 PUSH4 0x3B51A8B0 EQ PUSH2 0xC8 JUMPI DUP1 PUSH4 0x50431CE4 EQ PUSH2 0xE4 JUMPI DUP1 PUSH4 0x51CFF8D9 EQ PUSH2 0xFB JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x97 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xB2 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xAD SWAP2 SWAP1 PUSH2 0x96C JUMP JUMPDEST PUSH2 0x1D6 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xBF SWAP2 SWAP1 PUSH2 0xC80 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xE2 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xDD SWAP2 SWAP1 PUSH2 0xA20 JUMP JUMPDEST PUSH2 0x26D JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xF0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xF9 PUSH2 0x380 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x107 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x122 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x11D SWAP2 SWAP1 PUSH2 0x96C JUMP JUMPDEST PUSH2 0x47C JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x130 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x139 PUSH2 0x655 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x147 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x150 PUSH2 0x6DD JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x15D SWAP2 SWAP1 PUSH2 0xB65 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x180 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x17B SWAP2 SWAP1 PUSH2 0x9C6 JUMP JUMPDEST PUSH2 0x706 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x18E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x197 PUSH2 0x74C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1A4 SWAP2 SWAP1 PUSH2 0xC80 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1B9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1D4 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1CF SWAP2 SWAP1 PUSH2 0x96C JUMP JUMPDEST PUSH2 0x754 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 DUP1 DUP3 SWAP1 POP DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0x70A08231 DUP5 PUSH1 0x40 MLOAD DUP3 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x215 SWAP2 SWAP1 PUSH2 0xB65 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x22D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS STATICCALL ISZERO DUP1 ISZERO PUSH2 0x241 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x265 SWAP2 SWAP1 PUSH2 0x9F3 JUMP JUMPDEST SWAP2 POP POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0x23B872DD CALLER ADDRESS DUP7 PUSH1 0x40 MLOAD DUP5 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x2AF SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0xB80 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x2C9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x2DD JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x301 SWAP2 SWAP1 PUSH2 0x999 JUMP JUMPDEST PUSH2 0x340 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x337 SWAP1 PUSH2 0xC40 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH32 0xFB408329AB46B89FE59D3D1F7DE52A8B62F0C22C2DEA3F9B91C11164343A393D CALLER DUP4 DUP6 PUSH1 0x40 MLOAD PUSH2 0x373 SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0xB80 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 POP POP POP JUMP JUMPDEST PUSH2 0x388 PUSH2 0x84C JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x3A6 PUSH2 0x6DD JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x3FC JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x3F3 SWAP1 PUSH2 0xC60 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x406 PUSH2 0x6DD JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SELFBALANCE PUSH1 0x40 MLOAD PUSH2 0x429 SWAP1 PUSH2 0xB50 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP8 GAS CALL SWAP3 POP POP POP RETURNDATASIZE DUP1 PUSH1 0x0 DUP2 EQ PUSH2 0x466 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH1 0x0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x46B JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH2 0x479 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x484 PUSH2 0x84C JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x4A2 PUSH2 0x6DD JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x4F8 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x4EF SWAP1 PUSH2 0xC60 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0xA9059CBB CALLER DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0x70A08231 DUP7 PUSH1 0x40 MLOAD DUP3 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x553 SWAP2 SWAP1 PUSH2 0xB65 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x56B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS STATICCALL ISZERO DUP1 ISZERO PUSH2 0x57F JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x5A3 SWAP2 SWAP1 PUSH2 0x9F3 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP4 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x5C0 SWAP3 SWAP2 SWAP1 PUSH2 0xBB7 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x5DA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x5EE JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x612 SWAP2 SWAP1 PUSH2 0x999 JUMP JUMPDEST PUSH2 0x651 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x648 SWAP1 PUSH2 0xC20 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST POP POP JUMP JUMPDEST PUSH2 0x65D PUSH2 0x84C JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x67B PUSH2 0x6DD JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x6D1 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x6C8 SWAP1 PUSH2 0xC60 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x6DB PUSH1 0x0 PUSH2 0x854 JUMP JUMPDEST JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP1 JUMP JUMPDEST DUP1 CALLVALUE LT ISZERO PUSH2 0x749 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x740 SWAP1 PUSH2 0xBE0 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 SELFBALANCE SWAP1 POP SWAP1 JUMP JUMPDEST PUSH2 0x75C PUSH2 0x84C JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x77A PUSH2 0x6DD JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x7D0 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x7C7 SWAP1 PUSH2 0xC60 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0x840 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x837 SWAP1 PUSH2 0xC00 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x849 DUP2 PUSH2 0x854 JUMP JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 CALLER SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH1 0x0 DUP1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x927 DUP2 PUSH2 0xE20 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH2 0x93C DUP2 PUSH2 0xE37 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x951 DUP2 PUSH2 0xE4E JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH2 0x966 DUP2 PUSH2 0xE4E JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x982 JUMPI PUSH2 0x981 PUSH2 0xCFF JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x990 DUP5 DUP3 DUP6 ADD PUSH2 0x918 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x9AF JUMPI PUSH2 0x9AE PUSH2 0xCFF JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x9BD DUP5 DUP3 DUP6 ADD PUSH2 0x92D JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x9DC JUMPI PUSH2 0x9DB PUSH2 0xCFF JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x9EA DUP5 DUP3 DUP6 ADD PUSH2 0x942 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xA09 JUMPI PUSH2 0xA08 PUSH2 0xCFF JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0xA17 DUP5 DUP3 DUP6 ADD PUSH2 0x957 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xA37 JUMPI PUSH2 0xA36 PUSH2 0xCFF JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0xA45 DUP6 DUP3 DUP7 ADD PUSH2 0x942 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0xA56 DUP6 DUP3 DUP7 ADD PUSH2 0x918 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH2 0xA69 DUP2 PUSH2 0xCB7 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xA7C PUSH1 0x1F DUP4 PUSH2 0xCA6 JUMP JUMPDEST SWAP2 POP PUSH2 0xA87 DUP3 PUSH2 0xD04 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xA9F PUSH1 0x26 DUP4 PUSH2 0xCA6 JUMP JUMPDEST SWAP2 POP PUSH2 0xAAA DUP3 PUSH2 0xD2D JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xAC2 PUSH1 0x15 DUP4 PUSH2 0xC9B JUMP JUMPDEST SWAP2 POP PUSH2 0xACD DUP3 PUSH2 0xD7C JUMP JUMPDEST PUSH1 0x15 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xAE5 PUSH1 0x14 DUP4 PUSH2 0xCA6 JUMP JUMPDEST SWAP2 POP PUSH2 0xAF0 DUP3 PUSH2 0xDA5 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xB08 PUSH1 0x12 DUP4 PUSH2 0xCA6 JUMP JUMPDEST SWAP2 POP PUSH2 0xB13 DUP3 PUSH2 0xDCE JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xB2B PUSH1 0x20 DUP4 PUSH2 0xCA6 JUMP JUMPDEST SWAP2 POP PUSH2 0xB36 DUP3 PUSH2 0xDF7 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xB4A DUP2 PUSH2 0xCF5 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xB5B DUP3 PUSH2 0xAB5 JUMP JUMPDEST SWAP2 POP DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0xB7A PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0xA60 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x60 DUP3 ADD SWAP1 POP PUSH2 0xB95 PUSH1 0x0 DUP4 ADD DUP7 PUSH2 0xA60 JUMP JUMPDEST PUSH2 0xBA2 PUSH1 0x20 DUP4 ADD DUP6 PUSH2 0xA60 JUMP JUMPDEST PUSH2 0xBAF PUSH1 0x40 DUP4 ADD DUP5 PUSH2 0xB41 JUMP JUMPDEST SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 DUP3 ADD SWAP1 POP PUSH2 0xBCC PUSH1 0x0 DUP4 ADD DUP6 PUSH2 0xA60 JUMP JUMPDEST PUSH2 0xBD9 PUSH1 0x20 DUP4 ADD DUP5 PUSH2 0xB41 JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0xBF9 DUP2 PUSH2 0xA6F JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0xC19 DUP2 PUSH2 0xA92 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0xC39 DUP2 PUSH2 0xAD8 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0xC59 DUP2 PUSH2 0xAFB JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0xC79 DUP2 PUSH2 0xB1E JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0xC95 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0xB41 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xCC2 DUP3 PUSH2 0xCD5 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH32 0x506C65617365204465706F7369746520436F6D706C65746520616D6F756E7400 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x4F776E61626C653A206E6577206F776E657220697320746865207A65726F2061 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6464726573730000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x4F6E6C79206F776E657220697320616C6C6F7765640000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x4E6F20746F6B656E7320617661696C61626C6521000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x556E61626C6520746F204465706F736974650000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x4F776E61626C653A2063616C6C6572206973206E6F7420746865206F776E6572 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH2 0xE29 DUP2 PUSH2 0xCB7 JUMP JUMPDEST DUP2 EQ PUSH2 0xE34 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0xE40 DUP2 PUSH2 0xCC9 JUMP JUMPDEST DUP2 EQ PUSH2 0xE4B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0xE57 DUP2 PUSH2 0xCF5 JUMP JUMPDEST DUP2 EQ PUSH2 0xE62 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 DIFFICULTY 0xB5 MSTORE8 SWAP4 0x5F 0xF6 PUSH14 0xDB02D882251D34B1BB7C7FCD8DD8 0xAB LOG4 PUSH10 0x13FE9C611A8078576473 PUSH16 0x6C634300080700330000000000000000 ",
	"sourceMap": "171:1825:3:-:0;;;;;;;;;;;;;921:32:0;940:12;:10;;;:12;;:::i;:::-;921:18;;;:32;;:::i;:::-;171:1825:3;;640:96:2;693:7;719:10;712:17;;640:96;:::o;2270:187:0:-;2343:16;2362:6;;;;;;;;;;;2343:25;;2387:8;2378:6;;:17;;;;;;;;;;;;;;;;;;2441:8;2410:40;;2431:8;2410:40;;;;;;;;;;;;2333:124;2270:187;:::o;171:1825:3:-;;;;;;;"
}