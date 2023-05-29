import getConversation from "../actions/getConversation";
import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversation();

  const users = await getUsers();

  return (
    //@ts-expect-error SERVER COMPONENT
    <Sidebar>
      <ConversationList initialItems={conversations} users={users} />
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}
