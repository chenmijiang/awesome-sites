import styled from "styled-components";

import FormModal from "./FormModal";
import SimpleButton from "@/components/SimpleButton";
import { useEffect } from "react";

interface ILocalSite {
  name: string;
  link: string;
}

const CustomSites = () => {
  let modalVisible = false;
  let newSite: ILocalSite = {} as any; // 新增站点

  let localList: ILocalSite[] = [];

  useEffect(() => {
    const item = localStorage.getItem("__local_sites__");
    if (item) {
      localList = JSON.parse(item);
    }
    return () => {
      if (localList.length) {
        localStorage.setItem("__local_sites__", JSON.stringify(localList));
      }
      // 关闭弹窗时 删除已填数据
      if (!modalVisible) {
        newSite = {} as any;
      }
    };
  }, []);

  const handleOk = () => {
    console.log("111: ", newSite);
    if (newSite.name && newSite.link) {
      localList = [...localList, { ...newSite }] as ILocalSite[];
    }
    modalVisible = false;
  };

  const handleCancel = () => {
    modalVisible = false;
  };
  return (
    <CustomSitesContainer>
      <div
        className="btn cursor-pointer m-5px"
        onClick={() => (modalVisible = true)}
      >
        新增私人收藏站点 👏
      </div>

      {localList.length && (
        <section className="mt-15px">
          <div className="mb-10px text-[30px]">
            <div className="i-mdi-file-table-outline text-orange-400"></div>
            <span className="relative top-3px">私人收藏</span>
          </div>
          <div className="item-wrapper">
            {localList.map((site, index) => (
              <SimpleButton key={index}>
                <a
                  href="{site.link}"
                  target="_blank"
                  className="bg-black text-white"
                >
                  {site.name}
                </a>
              </SimpleButton>
            ))}
          </div>
        </section>
      )}

      <FormModal
        visible={modalVisible}
        title={"新增私人收藏站点"}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="请输入需要添加的站点名称"
            className="m-2 p-2 border-none bg-[#f1f1f1] b-rd"
            onInput={(ev: React.ChangeEvent<HTMLInputElement>) =>
              (newSite.name = ev.target.value)
            }
          />
          <input
            type="text"
            placeholder="请输入需要添加的站点url"
            className="m-2 p-2 border-none bg-[#f1f1f1] b-rd"
            onInput={(ev: React.ChangeEvent<HTMLInputElement>) =>
              (newSite.link = ev.target.value)
            }
          />
        </div>
      </FormModal>
    </CustomSitesContainer>
  );
};

const CustomSitesContainer = styled.div`
  .btn {
    width: fit-content;
    padding: 7px 15px;
    background: #000028;
    border-radius: 20px;
    color: white;
  }

  .btn:hover {
    box-shadow: 4px 4px 8px gray;
  }
`;

export default CustomSites;
