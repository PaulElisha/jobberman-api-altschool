// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "../src/TestGenerator.sol";

contract TestGeneratorScript is Script {
    TestGenerator testGenerator;

    function run() public {
        testGenerator = new TestGenerator();

        string memory tests = testGenerator.generateTestCases(
            "path/to/YourContract.json",
            "path/to/testCases.json"
        );

        vm.writeFile("test/GeneratedTests.t.sol", tests);

        console.log("Generated tests written to GeneratedTests.t.sol");
    }
}
