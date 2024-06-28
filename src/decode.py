import base64
import bz2
import zlib
import lzma
import gzip
from datetime import datetime
#from Crypto.Cipher import AES
#from cryptography.fernet import Fernet
#from Crypto.Cipher import ChaCha20
# 获取当前日期和时间
now = datetime.now()

# 将日期和时间格式化为字符串
formatted_date = now.strftime("%Y-%m-%d %H:%M:%S")


def try_decompress(data):
    try:
        decompressed_data = gzip.decompress(data)
        return decompressed_data
    except Exception as e:
        pass
    # 尝试使用 bz2 解压缩
    try:
        decompressed_data = bz2.decompress(data)
        # print("使用 bz2 解压缩成功")
        return decompressed_data
    except Exception as e:
        pass
    # 尝试使用 zlib 解压缩
    try:
        decompressed_data = zlib.decompress(data)
        # print("使用 zlib 解压缩成功")
        return decompressed_data
    except Exception as e:
        pass
    # 尝试使用 lzma 解压缩
    try:
        decompressed_data = lzma.decompress(data)
        # print("使用 lzma 解压缩成功")
        return decompressed_data
    except Exception as e:
        pass
    # 如果无法解压缩，则返回原始数据
    return data


def try_decode_base64(data):
    try:
        decoded_data = base64.b64decode(data)
        # print("使用 base64 解码成功")
        return decoded_data
    except Exception as e:
        pass
    # 如果无法解码，则返回原始数据
    return data


def extract_base64_encoded(data):
    # 查找 base64.b64decode( 的起始位置
    start_idx = data.find("base64.b64decode(")
    if start_idx == -1:
        return None  # 如果未找到目标字符串，返回 None
    # 查找 ' 的位置，从 base64.b64decode( 后面开始找
    quote_idx = data.index("'", start_idx + len("base64.b64decode("))
    # 提取 'XXXX' 中的 XXXX 部分
    encoded_string = data[quote_idx + 1:data.index("'", quote_idx + 1)]
    return encoded_string


def Encoded_script_decode(data):

    return


def decrypt_nested(data):
    while True:
        new_data = try_decode_base64(data)
        # print("解密前的数据：", data)
        new_data = try_decompress(new_data)
        # print("解密后的数据：", new_data)
        if "exec(" in str(new_data):
            # 更新 decrypted_data 以便下一次循环使用
            if "Encoded script" in str(new_data):
                new_data = "该加密未适配 敬请期待"
                print("该加密未适配 敬请期待")
                break
            elif "exec(" in str(new_data):
                data = extract_base64_encoded(str(new_data))
            else:
                print("未知 加密 无法进一步解密")
                new_data = "未知 加密 无法进一步解密"
                break  # 如果 new_data 中不再包含 "exec"，跳出循环
            # print(data)
        else:
            print("无法进一步解密，退出循环")
            break  # 如果 new_data 中不再包含 "exec"，跳出循环

    return new_data  # 返回最终解密后的数据


with open('./input.py', 'r', encoding='utf-8') as file:
    # 读取文件内容
    content = file.read().strip()
    # 打印内容
    encoded_data = extract_base64_encoded(content)
    # print(encoded_data)
# 解密嵌套加密数据
final_decrypted_data = decrypt_nested(encoded_data)
# 输出最终解密结果
# print("最终解密结果:")
def process_data(data):
    if isinstance(data, str):
        # 如果是字符串，则编码为字节对象
        byte_data = data.encode('utf-8')
    elif isinstance(data, bytes):
        # 如果已经是字节对象，则直接使用
        byte_data = data
    else:
        # 如果不是字符串也不是字节对象，抛出异常或做其他处理
        raise TypeError("Expected string or bytes-like object")
    return byte_data

print(final_decrypted_data)
with open("./output.py", 'wb') as f:
    f.write(process_data("#")+process_data(formatted_date)+process_data("\n")+process_data(final_decrypted_data))
