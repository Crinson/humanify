#!/usr/bin/env -S npx tsx

// 导入版本信息
import { version } from "../package.json";

// 导入各个命令模块
import { download } from "./commands/download.js";
import { local } from "./commands/local.js";
import { openai } from "./commands/openai.js";
import { azure } from "./commands/gemini.js";

// 导入CLI工具
import { cli } from "./cli.js";

// 配置和启动CLI应用
cli()
  // 设置应用名称
  .name("humanify")
  // 设置应用描述
  .description("Unminify code using OpenAI's API or a local LLM")
  // 设置版本号
  .version(version)
  // 添加本地LLM命令
  .addCommand(local)
  // 添加OpenAI API命令
  .addCommand(openai)
  // 添加Azure API命令
  .addCommand(azure)
  // 添加下载命令
  .addCommand(download())
  // 解析命令行参数并执行相应的命令
  .parse(process.argv);
