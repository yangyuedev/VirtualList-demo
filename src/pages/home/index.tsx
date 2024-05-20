import { Text, View, Image } from '@tarojs/components';
import { VirtualList } from '@tarojs/components-advanced';
import React from 'react';
import { cn } from '@/lib/utils';

function buildData(offset = 0) {
  return Array(100)
    .fill(0)
    .map((_, i) => i + offset);
}

const Row = React.memo(({ id, index, data }: { id: string; index: number; data: any }) => {
  return (
    <View className="px-4" id={id}>
      <View
        className={cn('flex flex-col p-4 gap-y-4 h-[140PX]', {
          'bg-green-500': index % 2 === 0,
          'bg-amber-500': index % 2 !== 0,
        })}
      >
        <View className="bg-none bg-white/5 backdrop-blur-[14px]">
          <Text>默认标签{data[index]}</Text>
        </View>
        <View className="flex-1 flex flex-row max-w-full gap-x-4 items-stretch">
          <View className="size-12 overflow-hidden rounded-md">
            <Image
              className="size-full"
              src="https://796f-you-feng-prod-1-7g4whuf919db3536-1318967665.tcb.qcloud.la/avatars/34e278a1-12a6-4f86-81b2-563db763f1c5.png"
              mode="aspectFill"
            />
          </View>
          <View className="flex-1 flex flex-col justify-between w-0 max-w-full">
            <View className="flex flex-row gap-x-4 items-center justify-between">
              <View className="flex-1 text-white text-[24px] whitespace-nowrap overflow-hidden text-ellipsis">
                微信用户{data[index]}
              </View>
              <Text>time</Text>
            </View>
            <View className="flex flex-row gap-x-4 items-center justify-between">
              <Text className="flex-1">Hi, {data[index]}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
});

const list = buildData(0);
const length = list.length;

export default function Index() {
  return (
    <VirtualList
      height={800} /* 列表的高度 */
      width="100%" /* 列表的宽度 */
      item={Row} /* 列表单项组件，这里只能传入一个组件 */
      itemData={list} /* 渲染列表的数据 */
      itemCount={length} /* 渲染列表的长度 */
      itemSize={150} /* 列表单项的高度  */
    />
  );
}
