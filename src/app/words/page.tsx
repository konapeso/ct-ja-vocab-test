import React from "react";
import Link from "next/link";
import { getAllVocabs } from "@/vocabAPI";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ListContent from "@/app/components/ListContent";

const List = async ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) => {
  const tabValue = (searchParams.value as string) || "tab1";
  const vocabs = await getAllVocabs();
  const filteredVocabs = vocabs.filter((vocab) => vocab.level === tabValue);

  return (
    <div className="grid h-full gap-2 px-4 py-6 lg:px-8">
      <h1 className="text-2xl font-bold">ルートページ</h1>
      <Tabs defaultValue={tabValue} className="h-full space-y-6">
        <div className="flex items-center justify-between">
          <TabsList>
            <Link href="?value=第1級">
              <TabsTrigger value="第1級" className="relative">
                第1級
              </TabsTrigger>
            </Link>
            <Link href="?value=第2級">
              <TabsTrigger value="第2級">第2級</TabsTrigger>
            </Link>
            <Link href="?value=第3級">
              <TabsTrigger value="第3級">第3級</TabsTrigger>
            </Link>
          </TabsList>
        </div>
        <ListContent
          value="第1級"
          tabValue={tabValue}
          filteredVocabs={filteredVocabs}
        />
        <ListContent
          value="第2級"
          tabValue={tabValue}
          filteredVocabs={filteredVocabs}
        />
        <ListContent
          value="第3級"
          tabValue={tabValue}
          filteredVocabs={filteredVocabs}
        />
      </Tabs>
    </div>
  );
};

export default List;
