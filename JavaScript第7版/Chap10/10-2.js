/**
 * Nodeモジュール
 * ・デフォルトでexportモジュールを持っており、これを上書きすることでexportする（グローバルオブジェクト）
 */
const test1 = "test1"
const test2 = "Test2"
module.export = {
  test1
}
exports.test3 = "test3"

const importment1 = require('module_name')
const importment2 = require('file_path')