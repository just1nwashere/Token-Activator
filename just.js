const Ayarlar = require("./ayarlar.json");

client.on('ready', async () => {
          const VoiceChannel = client.channels.cache.get(Ayarlar.sesID[index]);
          if (VoiceChannel) {
              joinVoiceChannel({
                  channelId: VoiceChannel.id,
                  guildId: VoiceChannel.guild.id,
                  adapterCreator: VoiceChannel.guild.voiceAdapterCreator,
                  selfDeaf: false,
                  selfMute: false
              });
          } else {
              console.warn(`[UYARI] Ses kanalı bulunamadı: ${Ayarlar.sesID[index]}`);
          }
  
          client.user.setStatus("dnd");
          console.log(`[TOKEN AKTİF] ${client.user.tag}`);
      });

client.login(Ayarlar.token);
